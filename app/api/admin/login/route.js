import {NextResponse} from "next/server";
import {createAuthToken,AUTH_COOKIE} from "../../../../lib/auth";

export async function POST(req){
  const form=await req.formData();
  const supplied=String(form.get("password")||"");
  const expected=process.env.ADMIN_PASSWORD || "EduAppsPlus2026!";
  if(supplied!==expected) return NextResponse.redirect(new URL("/admin/login?error=1",req.url),303);
  const res=NextResponse.redirect(new URL("/admin/apps",req.url),303);
  res.cookies.set(AUTH_COOKIE,createAuthToken(),{httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",path:"/",maxAge:60*60*12});
  return res;
}
