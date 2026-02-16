import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile", "/cart"];
const authRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.next();
    } else {
      const redirectURL = new URL("/login", process.env.BASE_URL);
      redirectURL.searchParams.set("url", req.nextUrl.pathname);
      return NextResponse.redirect(redirectURL);
    }
  }

  if (authRoutes.includes(req.nextUrl.pathname)) {
    if (token) {
      const redirectURL = new URL("/", process.env.BASE_URL);
      return NextResponse.redirect(redirectURL);
    } else {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
