# EDU Apps Plus Website V1.2

A database-free Next.js App Router project designed to run locally in Visual Studio Code, stay in sync through GitHub, and deploy automatically to Vercel.

## Architecture

- **Framework:** Next.js 15 / React 19
- **App data:** `data/apps.json`
- **Local editing:** Teacher App Manager writes directly to `data/apps.json`
- **Vercel editing:** Teacher App Manager commits `data/apps.json` to GitHub using the GitHub Contents API
- **Deployment:** Vercel deploys the connected GitHub production branch automatically
- **Production branch for this repository:** `master`

This project intentionally uses the Next.js application only. Do not add the older Express `server.js`, `app.js`, `views/`, or a custom `vercel.json` routing all traffic to Express. Vercel can detect and deploy Next.js without that custom configuration.

## Local setup in Visual Studio Code

```bash
cd ~/Documents/GitHub/eduappsplus_website
npm install
cp .env.example .env.local
npm run dev
```

Open:

- Website: `http://localhost:3000`
- Teacher App Manager: `http://localhost:3000/admin/login`

Edit `.env.local` and set at least:

```env
ADMIN_PASSWORD=your-local-admin-password
AUTH_SECRET=a-long-random-secret
```

Local Teacher App Manager changes are written to `data/apps.json`. After checking the changes, commit and push them normally with Git.

## Normal local → GitHub → Vercel workflow

```bash
git status
git add .
git commit -m "Describe the change"
git push origin master
```

Vercel should be connected to the GitHub repository `trevore777/eduappsplus_website` with **master** configured as the Production Branch. A push to `master` then produces the production deployment automatically.

## Vercel settings

Vercel should use:

- Framework Preset: **Next.js**
- Root Directory: repository root
- Build Command: default (`next build`)
- Install Command: default
- Output Directory: default
- Production Branch: **master**

No `vercel.json` is required for this project.

### Required Vercel environment variables

Set these for Production (and Preview if you want the admin manager to work on previews):

```env
ADMIN_PASSWORD=your-admin-password
AUTH_SECRET=a-long-random-secret
```

To allow the deployed Teacher App Manager to save changes back to GitHub, also set:

```env
GITHUB_TOKEN=your-fine-grained-github-token
GITHUB_OWNER=trevore777
GITHUB_REPO=eduappsplus_website
GITHUB_BRANCH=master
```

The GitHub token should be fine-grained, restricted to this repository, with repository **Contents: Read and write** permission. Do not commit the token or any `.env*` file containing secrets.

## Important editing behaviour

### Editing locally

When running `npm run dev`, saving an app in Teacher App Manager updates your local `data/apps.json`. You then review, commit and push that file yourself.

### Editing on Vercel

When running on Vercel, saving an app in Teacher App Manager uses the configured GitHub token to commit `data/apps.json` to `master`. The GitHub commit then triggers the normal Vercel deployment.

## Troubleshooting

### Vercel runs `server.js` or reports missing Express packages

An obsolete `vercel.json` is probably still present in GitHub or Vercel is deploying an older commit. Remove the old Express deployment files, ensure the current commit contains the Next.js `app/` directory and `package.json`, then redeploy.

### App Manager says `GitHub editing is not configured`

Check `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, and `GITHUB_BRANCH` in Vercel Project Settings. For this repository the branch is `master`.

### Local changes do not appear on Vercel

Confirm they were committed and pushed:

```bash
git status
git log -3 --oneline
git push origin master
```

Then check that the Vercel project is connected to the same GitHub repository and that `master` is its Production Branch.
