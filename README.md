# EDU Apps Plus V1 — No Database

A simple app-directory website for EDU Apps Plus. It uses a single JSON file instead of PostgreSQL.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open:

- Public site: http://localhost:3000
- Admin: http://localhost:3000/admin/login

The default development password is `eduappsplus`. Change `ADMIN_PASSWORD` in `.env`.

## Where app data lives

All categories and apps are stored in:

```text
data/apps.json
```

When running locally, Add/Edit/Delete in the Admin page writes directly to this file. Commit and push the changed JSON file to GitHub as normal.

## Vercel deployment

This project includes `api/index.js` and `vercel.json` for Vercel.

Add these Environment Variables in Vercel:

```text
ADMIN_PASSWORD=your-password
SESSION_SECRET=a-long-random-secret
```

The public website does not need a database or any database environment variables.

### Optional: make Admin saves persist directly on Vercel

Vercel's deployed filesystem is read-only/non-persistent. To let the Admin page add/edit/delete apps in production without a database, configure GitHub-backed JSON saving.

Add:

```text
GITHUB_TOKEN=your-fine-grained-token
GITHUB_OWNER=your-github-username
GITHUB_REPO=eduappsplus_website
GITHUB_BRANCH=main
GITHUB_DATA_PATH=data/apps.json
```

Use a fine-grained GitHub token restricted to this repository with **Contents: Read and write** permission. Admin changes then commit `data/apps.json` to GitHub; the GitHub commit triggers Vercel's normal redeployment.

If you do not configure the GitHub variables, manage apps locally and push the JSON changes to GitHub.

## Student Evidence

The seeded Student Evidence link is:

```text
https://evidence.eduappsplus.com.au
```

This is intended to point to Student Evidence hosted on AWS. Your other curriculum apps can remain hosted on Vercel.

## No longer required

This version has no PostgreSQL dependency and does not use:

- `DATABASE_URL`
- `pg`
- `pg-pool`
- `npm run db:init`
- Render
