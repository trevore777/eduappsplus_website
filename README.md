# EDU Apps Plus Website V1.2

Database-free, Vercel-native Next.js app directory.

## Features
- Apps grouped into separate subject areas.
- Sticky subject navigation at the top jumps directly to each subject section.
- Search by app name, subject, year level or description.
- Teacher App Manager with add/edit/delete, URL editing, subject assignment, status, feature toggle and display order.
- Secure signed-cookie admin login that works on Vercel serverless.
- No PostgreSQL and no database.
- Local editing writes directly to `data/apps.json`.
- Optional Vercel admin editing commits `data/apps.json` to GitHub, triggering a normal Vercel redeploy.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open:
- Website: http://localhost:3000
- Teacher App Manager: http://localhost:3000/admin/login

Default local password if `ADMIN_PASSWORD` is unset:

`EduAppsPlus2026!`

Set a different password in `.env`.

## Vercel environment variables

Required:
- `ADMIN_PASSWORD` — your chosen teacher/admin password
- `AUTH_SECRET` — a long random secret string

For browser-based editing on the deployed Vercel site, also set:
- `GITHUB_TOKEN` — fine-grained GitHub token with Contents read/write for this repository only
- `GITHUB_OWNER` — your GitHub username/organisation
- `GITHUB_REPO` — e.g. `eduappsplus_website`
- `GITHUB_BRANCH` — usually `main`

When you save in Teacher App Manager on Vercel, the app commits `data/apps.json` to GitHub. Vercel then redeploys from that commit.

## Important URL notes

Two supplied school links were incomplete:
- Coding Club: `/homepage/36034`
- Year 10 Digital Solutions: `/homepage/53605`

They are included as drafts with no clickable public URL. Use Teacher App Manager to add the complete `https://...` URL when known.

Student Evidence is currently set to the URL supplied:
`https://student-evidence-app.onrender.com`

Since the intended architecture is Student Evidence on AWS, edit that URL in Teacher App Manager once the AWS-backed public address is ready (for example `https://evidence.eduappsplus.com.au`).

## Recommended deployment

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Add environment variables in Vercel Project Settings.
4. Deploy.
5. Later point `www.eduappsplus.com.au` to this Vercel project.
