import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE = "eduappsplus_admin";

function secret(){ return process.env.AUTH_SECRET || "local-dev-change-this-secret"; }
function sign(value){ return crypto.createHmac("sha256", secret()).update(value).digest("hex"); }

export function createAuthToken(){
  const expiresAt = Date.now() + 1000 * 60 * 60 * 12;
  const payload = `admin.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}
export function validAuthToken(token=""){
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "admin") return false;
  const expiresAt = Number(parts[1]);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = sign(payload);
  try {
    return crypto.timingSafeEqual(Buffer.from(parts[2]), Buffer.from(expected));
  } catch { return false; }
}
export async function isAdmin(){
  const store = await cookies();
  return validAuthToken(store.get(COOKIE)?.value || "");
}
export const AUTH_COOKIE = COOKIE;
