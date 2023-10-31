import cookie from "cookie";
export function parseCookies(ctx) {
  return ctx?.req?.cookies?.token || null;
}
