# EDU Apps Plus V1.1 — No Database

## Local setup
```bash
npm install
cp .env.example .env
npm run dev
```
Open `http://localhost:3000`.

Admin login: `http://localhost:3000/admin/login`

Default development password: `EduAppsPlus2026!`

## Vercel environment variables
Set these in **Vercel → Project → Settings → Environment Variables**:

- `ADMIN_PASSWORD` — choose your private admin password.
- `AUTH_SECRET` — a long random string, ideally 32+ characters.

Then redeploy.

## Adding/editing apps
The catalogue is stored in `data/apps.json`. Edit that file, commit, and push. Vercel will redeploy automatically from GitHub.

This version intentionally uses no database. The admin login uses a signed cookie rather than an in-memory Express session, so it works correctly across Vercel serverless requests.

## Internal links needing a full URL
Two supplied links are relative school-portal paths and are not published as clickable public app cards:

- Coding Club: `/homepage/36034`
- Year 10 Digital Solutions: `/homepage/53605`

Replace each with a full URL such as `https://school-portal.example/homepage/36034` when known, then change its `status` from `internal` to `published`.

## Student Evidence
The supplied Student Evidence URL currently points to Render because that is the URL provided in the app list. When the AWS hostname is ready, replace it in `data/apps.json` with the AWS-backed URL, ideally `https://evidence.eduappsplus.com.au`.
