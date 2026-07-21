import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'EduAppsPlus2026!';
const AUTH_SECRET = process.env.AUTH_SECRET || 'local-dev-change-me';
const DATA_FILE = path.join(__dirname, 'data', 'apps.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

function readApps() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}
function escapeHtml(v='') {
  return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
}
function sign(value) {
  return crypto.createHmac('sha256', AUTH_SECRET).update(value).digest('hex');
}
function makeToken() {
  const payload = `${Date.now() + 1000*60*60*8}`;
  return `${payload}.${sign(payload)}`;
}
function validToken(token='') {
  const [exp, sig] = token.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const expected = sign(exp);
  try { return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected)); } catch { return false; }
}
function requireAdmin(req,res,next) {
  if (validToken(req.cookies.eduapps_admin)) return next();
  return res.redirect('/admin/login');
}
function layout(title, body) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><link rel="stylesheet" href="/public/styles.css"></head><body>${body}</body></html>`;
}
function isExternal(url='') { return /^https?:\/\//i.test(url); }

app.get('/', (req,res) => {
  const apps = readApps();
  const published = apps.filter(a => a.status === 'published');
  const featured = published.filter(a => a.featured);
  const categories = [...new Set(published.map(a => a.category))].sort();
  const cards = published.map(a => `<article class="card" data-search="${escapeHtml([a.name,a.subtitle,a.category,(a.tags||[]).join(' '),(a.years||[]).join(' ')].join(' ').toLowerCase())}" data-category="${escapeHtml(a.category)}" data-years="${escapeHtml((a.years||[]).join(','))}"><div class="eyebrow">${escapeHtml(a.subtitle)}</div><h3>${escapeHtml(a.name)}</h3><p>${escapeHtml(a.description)}</p><div class="meta"><span>${escapeHtml(a.category)}</span><span>${escapeHtml((a.years||[]).join(', '))}</span></div><a class="btn" href="${escapeHtml(a.url)}" target="_blank" rel="noopener">Open App →</a></article>`).join('');
  const featuredHtml = featured.map(a=>`<a class="feature" href="${escapeHtml(a.url)}" target="_blank" rel="noopener"><strong>${escapeHtml(a.name)}</strong><span>${escapeHtml(a.subtitle)}</span></a>`).join('');
  const internal = apps.filter(a=>a.status==='internal');
  res.send(layout('EDU Apps Plus', `<header class="hero"><nav><div class="brand">EDU <span>APPS+</span></div><a href="/admin/login">Admin</a></nav><div class="hero-inner"><p class="kicker">LEARNING • CREATING • EVIDENCE • ASSESSMENT</p><h1>Digital tools for better learning.</h1><p class="lead">One place to find classroom apps, assessment tools, student resources and EDU Apps Plus projects.</p><input id="search" placeholder="Search apps, subjects or year levels…" autocomplete="off"></div></header><main><section><h2>Featured apps</h2><div class="features">${featuredHtml}</div></section><section class="filters"><button class="filter active" data-cat="all">All</button>${categories.map(c=>`<button class="filter" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</section><section><div id="grid" class="grid">${cards}</div><p id="empty" class="empty" hidden>No apps match your search.</p></section>${internal.length?`<section class="note"><h2>Internal school links</h2><p>Two links were supplied as relative school-portal paths and cannot work from Vercel until their full school portal domain is known.</p>${internal.map(a=>`<div><strong>${escapeHtml(a.name)}</strong> — <code>${escapeHtml(a.url)}</code></div>`).join('')}</section>`:''}</main><footer>EDU Apps Plus</footer><script src="/public/app.js"></script>`));
});

app.get('/admin/login',(req,res)=>res.send(layout('Admin Login',`<main class="admin-wrap"><div class="login-card"><div class="brand">EDU <span>APPS+</span></div><h1>Admin Login</h1><form method="post" action="/admin/login"><label>Password<input type="password" name="password" required autofocus></label><button class="btn" type="submit">Sign in</button></form><p><a href="/">← Back to site</a></p></div></main>`)));
app.post('/admin/login',(req,res)=>{
  const supplied = String(req.body.password||'');
  const ok = supplied.length===ADMIN_PASSWORD.length && crypto.timingSafeEqual(Buffer.from(supplied),Buffer.from(ADMIN_PASSWORD));
  if (!ok) return res.status(401).send(layout('Login failed',`<main class="admin-wrap"><div class="login-card"><h1>Incorrect password</h1><p><a href="/admin/login">Try again</a></p></div></main>`));
  res.cookie('eduapps_admin',makeToken(),{httpOnly:true,secure:process.env.NODE_ENV==='production'||!!process.env.VERCEL,sameSite:'lax',maxAge:1000*60*60*8,path:'/'});
  res.redirect('/admin/apps');
});
app.get('/admin/logout',(req,res)=>{res.clearCookie('eduapps_admin',{path:'/'});res.redirect('/admin/login');});
app.get('/admin/apps',requireAdmin,(req,res)=>{
  const apps=readApps();
  const rows=apps.map(a=>`<tr><td><strong>${escapeHtml(a.name)}</strong><br><small>${escapeHtml(a.subtitle)}</small></td><td>${escapeHtml(a.category)}</td><td>${escapeHtml((a.years||[]).join(', '))}</td><td>${escapeHtml(a.status)}</td><td><a href="${escapeHtml(a.url)}" ${isExternal(a.url)?'target="_blank" rel="noopener"':''}>Open</a></td></tr>`).join('');
  res.send(layout('App Manager',`<header class="admin-head"><div class="brand">EDU <span>APPS+</span></div><nav><a href="/">View site</a><a href="/admin/logout">Log out</a></nav></header><main class="admin-main"><h1>App Manager</h1><div class="notice"><strong>Database-free V1.1</strong><br>The published catalogue is stored in <code>data/apps.json</code>. This admin login is Vercel-safe and stays logged in using a signed secure cookie. Edit the JSON file and push to GitHub to permanently add or change apps.</div><table><thead><tr><th>App</th><th>Category</th><th>Year</th><th>Status</th><th>Link</th></tr></thead><tbody>${rows}</tbody></table></main>`));
});

app.get('/favicon.ico',(req,res)=>res.status(204).end());
app.use((req,res)=>res.status(404).send(layout('Not Found','<main class="admin-wrap"><div class="login-card"><h1>Page not found</h1><p><a href="/">Return home</a></p></div></main>')));

if (!process.env.VERCEL) app.listen(PORT,()=>console.log(`EDU Apps Plus V1.1 running at http://localhost:${PORT}`));
export default app;
