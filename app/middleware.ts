import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./utils/session";

const protectedRoutes = ["/events"];

const publicRoutes = ["/", "auth/login", "auth/register"];

const middleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;

  const isCreatedPage = path === "/events/create";

  const isProtectedRoute = protectedRoutes.some(
    (route) => path.startsWith(route) && !isCreatedPage,
  );
  const isPublicRoute = publicRoutes.includes(path) || isCreatedPage;

  const cookie = request.cookies.get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.sub) {
    return NextResponse.redirect(new URL("auth/login", request.nextUrl));
  }

  if (isPublicRoute && session?.sub) {
    return NextResponse.redirect(new URL("/events", request.nextUrl));
  }

  return NextResponse.next();
};

export default middleware;
