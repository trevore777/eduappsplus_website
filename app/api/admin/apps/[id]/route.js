import {NextResponse} from "next/server";
import {isAdmin} from "../../../../../lib/auth";
import {readApps,saveApps,normaliseApp} from "../../../../../lib/apps";
export async function POST(req,{params}){
 if(!await isAdmin()) return NextResponse.redirect(new URL("/admin/login",req.url),303);
 const {id}=await params; let apps=await readApps(); const index=apps.findIndex(a=>a.id===id);
 if(index<0) return new NextResponse("App not found",{status:404});
 const deleting=new URL(req.url).searchParams.get("delete")==="1";
 try{
   if(deleting){ const name=apps[index].name; apps.splice(index,1); await saveApps(apps,`Delete app: ${name}`); }
   else { const form=Object.fromEntries((await req.formData()).entries()); const updated=normaliseApp(form,apps[index]); apps[index]=updated; await saveApps(apps,`Update app: ${updated.name}`); }
 }catch(e){ return new NextResponse(`Could not save: ${e.message}`,{status:500}); }
 return NextResponse.redirect(new URL("/admin/apps",req.url),303);
}
