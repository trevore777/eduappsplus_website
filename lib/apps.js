import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "apps.json");

export async function readApps() {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  return JSON.parse(raw);
}

export function slugify(value="") {
  return value.toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
}

export function cleanUrl(url="") {
  let value = String(url).trim();
  value = value.replace(/^\/+https?:\//i, m => m.replace(/^\/+/, ""));
  if (!value) return "";
  if (!/^https?:\/\//i.test(value)) value = `https://${value}`;
  try { return new URL(value).toString(); } catch { return ""; }
}

export function normaliseApp(input, existing={}) {
  return {
    id: input.id || existing.id || `${slugify(input.name)}-${Date.now()}`,
    name: String(input.name || existing.name || "").trim(),
    subject: String(input.subject || existing.subject || "Other").trim(),
    year: String(input.year || existing.year || "All Years").trim(),
    description: String(input.description || existing.description || "").trim(),
    url: cleanUrl(input.url ?? existing.url ?? ""),
    internalPath: String(input.internalPath ?? existing.internalPath ?? "").trim(),
    featured: input.featured === true || input.featured === "true" || input.featured === "on",
    status: ["published","draft","hidden"].includes(input.status) ? input.status : (existing.status || "published"),
    order: Number(input.order ?? existing.order ?? 99)
  };
}

async function writeLocal(apps) {
  await fs.writeFile(DATA_PATH, JSON.stringify(apps, null, 2) + "\n");
}

async function writeGitHub(apps, message) {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token || !owner || !repo) throw new Error("GitHub editing is not configured.");

  const api = `https://api.github.com/repos/${owner}/${repo}/contents/data/apps.json`;
  const headers = { Authorization:`Bearer ${token}`, Accept:"application/vnd.github+json", "X-GitHub-Api-Version":"2022-11-28" };
  const current = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, {headers, cache:"no-store"});
  if (!current.ok) throw new Error(`Unable to read apps.json from GitHub (${current.status}).`);
  const currentJson = await current.json();
  const content = Buffer.from(JSON.stringify(apps, null, 2) + "\n").toString("base64");
  const update = await fetch(api, {
    method:"PUT", headers:{...headers,"Content-Type":"application/json"},
    body:JSON.stringify({message, content, sha:currentJson.sha, branch})
  });
  if (!update.ok) throw new Error(`Unable to update apps.json in GitHub (${update.status}).`);
}

export async function saveApps(apps, message="Update EDU Apps Plus app directory") {
  if (process.env.VERCEL === "1") return writeGitHub(apps, message);
  return writeLocal(apps);
}
