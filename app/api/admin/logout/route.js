import {NextResponse} from "next/server";
import {AUTH_COOKIE} from "../../../../lib/auth";
export async function POST(req){
  const res=NextResponse.redirect(new URL("/",req.url),303);
  res.cookies.set(AUTH_COOKIE,"",{path:"/",maxAge:0});
  return res;
}
