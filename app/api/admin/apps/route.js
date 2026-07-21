import {NextResponse} from "next/server";
import {isAdmin} from "../../../../lib/auth";
import {readApps,saveApps,normaliseApp} from "../../../../lib/apps";
export async function POST(req){
 if(!await isAdmin()) return NextResponse.redirect(new URL("/admin/login",req.url),303);
 const form=Object.fromEntries((await req.formData()).entries());
 const app=normaliseApp(form);
 if(!app.name) return new NextResponse("App name is required",{status:400});
 const apps=await readApps(); apps.push(app);
 try{ await saveApps(apps,`Add app: ${app.name}`); }
 catch(e){ return new NextResponse(`Could not save: ${e.message}`,{status:500}); }
 return NextResponse.redirect(new URL("/admin/apps",req.url),303);
}
