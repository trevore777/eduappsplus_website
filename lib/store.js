import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_FILE = path.join(process.cwd(), 'data', 'apps.json');
const GITHUB_API = 'https://api.github.com';

function githubConfigured() {
  return Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_OWNER && process.env.GITHUB_REPO);
}

async function githubRequest(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status}: ${text}`);
  }
  return response.json();
}

export async function loadData() {
  // The deployed site reads the bundled JSON. After an admin commit, Vercel redeploys
  // and the new deployment receives the updated file.
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(raw);
}

export async function saveData(data, message = 'Update EDU Apps Plus app directory') {
  const json = `${JSON.stringify(data, null, 2)}\n`;

  if (process.env.VERCEL && githubConfigured()) {
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const branch = process.env.GITHUB_BRANCH || 'main';
    const filePath = process.env.GITHUB_DATA_PATH || 'data/apps.json';
    const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${filePath}?ref=${encodeURIComponent(branch)}`;
    const current = await githubRequest(url);
    await githubRequest(`${GITHUB_API}/repos/${owner}/${repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        content: Buffer.from(json, 'utf8').toString('base64'),
        sha: current.sha,
        branch
      })
    });
    return { mode: 'github', message: 'Saved to GitHub. Vercel will redeploy the updated directory.' };
  }

  if (process.env.VERCEL) {
    throw new Error('Admin saving on Vercel requires GITHUB_TOKEN, GITHUB_OWNER and GITHUB_REPO environment variables.');
  }

  await fs.writeFile(DATA_FILE, json, 'utf8');
  return { mode: 'local', message: 'Saved to data/apps.json.' };
}
