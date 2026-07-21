import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import { loadData, saveData } from './lib/store.js';

const app = express();
app.set('view engine', 'ejs');
app.set('views', new URL('./views', import.meta.url).pathname);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(new URL('./public', import.meta.url).pathname));
app.use(session({
  secret: process.env.SESSION_SECRET || 'eduappsplus-v1-local-session',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 1000 * 60 * 60 * 8 }
}));

function slugify(value = '') {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function requireAdmin(req, res, next) {
  if (req.session?.admin === true) return next();
  return res.redirect('/admin/login');
}
function enrich(data) {
  const categoryMap = Object.fromEntries(data.categories.map(c => [c.id, c]));
  const apps = data.apps.map(a => ({
    ...a,
    category_name: categoryMap[a.category_id]?.name || 'Other',
    category_slug: categoryMap[a.category_id]?.slug || 'other',
    category_icon: categoryMap[a.category_id]?.icon || '🚀'
  }));
  const categories = data.categories
    .map(c => ({ ...c, app_count: apps.filter(a => a.category_id === c.id && a.status === 'published').length }))
    .sort((a, b) => a.display_order - b.display_order || a.name.localeCompare(b.name));
  return { apps, categories };
}

app.get('/', async (req, res, next) => {
  try {
    const { apps, categories } = enrich(await loadData());
    const published = apps.filter(a => a.status === 'published')
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.display_order - b.display_order || a.name.localeCompare(b.name));
    res.render('index', { apps: published, categories });
  } catch (e) { next(e); }
});

app.get('/admin/login', (req, res) => res.render('admin-login', { error: null }));
app.post('/admin/login', (req, res) => {
  const expected = process.env.ADMIN_PASSWORD || 'eduappsplus';
  if (req.body.password !== expected) return res.status(401).render('admin-login', { error: 'Incorrect password.' });
  req.session.admin = true;
  res.redirect('/admin/apps');
});
app.post('/admin/logout', (req, res) => req.session.destroy(() => res.redirect('/')));

app.get('/admin/apps', requireAdmin, async (req, res, next) => {
  try {
    const { apps } = enrich(await loadData());
    apps.sort((a, b) => a.display_order - b.display_order || a.name.localeCompare(b.name));
    res.render('admin-apps', { apps, saved: req.query.saved || '', error: req.query.error || '', vercel: Boolean(process.env.VERCEL) });
  } catch (e) { next(e); }
});
app.get('/admin/apps/new', requireAdmin, async (req, res, next) => {
  try {
    const data = await loadData();
    res.render('admin-app-form', { item: null, categories: data.categories });
  } catch (e) { next(e); }
});
app.post('/admin/apps', requireAdmin, async (req, res) => {
  try {
    const data = await loadData();
    const slug = slugify(req.body.slug || req.body.name);
    if (!slug) throw new Error('App name is required.');
    if (data.apps.some(a => a.id === slug || a.slug === slug)) throw new Error('An app with that name/slug already exists.');
    data.apps.push({
      id: slug, name: req.body.name.trim(), slug, description: req.body.description?.trim() || '', url: req.body.url?.trim() || '',
      category_id: req.body.category_id || '', year_levels: req.body.year_levels?.trim() || 'All', audience: req.body.audience?.trim() || 'Students, Teachers',
      app_type: req.body.app_type?.trim() || 'Learning Tool', tags: req.body.tags?.trim() || '', icon: req.body.icon?.trim() || '🚀',
      featured: req.body.featured === 'on', status: req.body.status || 'draft', display_order: Number(req.body.display_order || 100)
    });
    const result = await saveData(data, `Add app: ${req.body.name}`);
    res.redirect(`/admin/apps?saved=${encodeURIComponent(result.message)}`);
  } catch (e) { res.redirect(`/admin/apps?error=${encodeURIComponent(e.message)}`); }
});
app.get('/admin/apps/:id/edit', requireAdmin, async (req, res, next) => {
  try {
    const data = await loadData();
    const item = data.apps.find(a => a.id === req.params.id);
    if (!item) return res.status(404).send('App not found');
    res.render('admin-app-form', { item, categories: data.categories });
  } catch (e) { next(e); }
});
app.post('/admin/apps/:id', requireAdmin, async (req, res) => {
  try {
    const data = await loadData();
    const index = data.apps.findIndex(a => a.id === req.params.id);
    if (index < 0) return res.status(404).send('App not found');
    const current = data.apps[index];
    data.apps[index] = {
      ...current, name: req.body.name.trim(), slug: slugify(req.body.slug || req.body.name), description: req.body.description?.trim() || '', url: req.body.url?.trim() || '',
      category_id: req.body.category_id || '', year_levels: req.body.year_levels?.trim() || 'All', audience: req.body.audience?.trim() || 'Students, Teachers',
      app_type: req.body.app_type?.trim() || 'Learning Tool', tags: req.body.tags?.trim() || '', icon: req.body.icon?.trim() || '🚀',
      featured: req.body.featured === 'on', status: req.body.status || 'draft', display_order: Number(req.body.display_order || 100)
    };
    const result = await saveData(data, `Update app: ${req.body.name}`);
    res.redirect(`/admin/apps?saved=${encodeURIComponent(result.message)}`);
  } catch (e) { res.redirect(`/admin/apps?error=${encodeURIComponent(e.message)}`); }
});
app.post('/admin/apps/:id/delete', requireAdmin, async (req, res) => {
  try {
    const data = await loadData();
    const item = data.apps.find(a => a.id === req.params.id);
    data.apps = data.apps.filter(a => a.id !== req.params.id);
    const result = await saveData(data, `Delete app: ${item?.name || req.params.id}`);
    res.redirect(`/admin/apps?saved=${encodeURIComponent(result.message)}`);
  } catch (e) { res.redirect(`/admin/apps?error=${encodeURIComponent(e.message)}`); }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(`<h1>Something went wrong</h1><pre>${process.env.NODE_ENV === 'development' ? err.message : 'Please try again.'}</pre>`);
});

export default app;
