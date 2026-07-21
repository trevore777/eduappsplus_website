import {redirect} from "next/navigation";
import {isAdmin} from "../../../lib/auth";
import {readApps} from "../../../lib/apps";

export const dynamic="force-dynamic";

export default async function AdminApps(){
  if(!await isAdmin()) redirect("/admin/login");
  const apps=(await readApps()).sort((a,b)=>a.subject.localeCompare(b.subject)||a.order-b.order);
  return <div className="adminWrap">
    <div className="actions">
      <a className="button" href="/admin/apps/new">+ Add New App</a>
      <a className="button secondary" href="/">View Website</a>
      <form method="post" action="/api/admin/logout"><button className="secondary">Log out</button></form>
    </div>
    <div className="panel">
      <h1>Teacher App Manager</h1>
      <p>Add apps, edit URLs, move apps between subjects, feature them, hide them or change their display order.</p>
      {process.env.VERCEL==="1" && <div className="notice">On Vercel, Save commits <strong>data/apps.json</strong> to GitHub and triggers a new Vercel deployment. GitHub environment variables must be configured.</div>}
      <div className="adminTable"><table><thead><tr><th>App</th><th>Subject</th><th>Year</th><th>Status</th><th>URL</th><th></th></tr></thead>
      <tbody>{apps.map(a=><tr key={a.id}><td><strong>{a.name}</strong>{a.featured&&<><br/><small>Featured</small></>}</td><td>{a.subject}</td><td>{a.year}</td><td>{a.status}</td><td style={{maxWidth:260,wordBreak:"break-word"}}>{a.url||"No public URL"}</td><td><a className="button secondary" href={`/admin/apps/${a.id}`}>Edit</a></td></tr>)}</tbody>
      </table></div>
    </div>
  </div>;
}
