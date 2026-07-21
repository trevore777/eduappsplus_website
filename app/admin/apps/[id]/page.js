import {redirect,notFound} from "next/navigation";
import {isAdmin} from "../../../../lib/auth";
import {readApps} from "../../../../lib/apps";
import AppForm from "../../../../components/AppForm";
export default async function EditApp({params}){
 if(!await isAdmin()) redirect("/admin/login");
 const {id}=await params; const apps=await readApps(); const app=apps.find(a=>a.id===id); if(!app) notFound();
 return <div className="adminWrap"><div className="panel"><h1>Edit App</h1><AppForm app={app} action={`/api/admin/apps/${id}`} submitLabel="Save Changes"/>
 <form method="post" action={`/api/admin/apps/${id}?delete=1`} style={{marginTop:28}}><button className="danger">Delete App</button></form></div></div>;
}
