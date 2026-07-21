export default function AppForm({app={}, action, submitLabel="Save App"}){
  const subjects=["Student Evidence","Christian Studies","Business","Digital Technologies","Digital Solutions","STEM","Study & Learning","Clubs & Activities","Teacher Tools","Creative & Media","Personal & Community","Other"];
  return <form method="post" action={action}>
    <div className="row"><div><label>App Name</label><input name="name" defaultValue={app.name||""} required/></div>
    <div><label>Subject Area</label><select name="subject" defaultValue={app.subject||"Other"}>{subjects.map(s=><option key={s}>{s}</option>)}</select></div></div>
    <div className="row"><div><label>Year Level</label><input name="year" defaultValue={app.year||"All Years"} placeholder="e.g. Year 9 or Years 7–8"/></div>
    <div><label>Display Order</label><input type="number" name="order" defaultValue={app.order??99}/></div></div>
    <label>Description</label><textarea name="description" defaultValue={app.description||""}/>
    <label>Public URL</label><input name="url" defaultValue={app.url||""} placeholder="https://example.vercel.app/"/>
    <div className="row"><div><label>Status</label><select name="status" defaultValue={app.status||"published"}><option value="published">Published</option><option value="draft">Draft</option><option value="hidden">Hidden</option></select></div>
    <div><label>Featured</label><select name="featured" defaultValue={app.featured?"true":"false"}><option value="false">No</option><option value="true">Yes</option></select></div></div>
    <div style={{marginTop:20}}><button type="submit">{submitLabel}</button> <a className="button secondary" href="/admin/apps">Cancel</a></div>
  </form>;
}
