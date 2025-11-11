import { authkitMiddleware } from "@workos-inc/authkit-nextjs";
import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";

const runAuthkit = authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: [
      "/",
      "/curriculum",
      "/curriculum/(.*)",
      "/signin",
      "/login",
      "/callback",
    ],
  },
});

export default async function proxy(request: NextRequest, event: NextFetchEvent) {
  const authResponse = await runAuthkit(request, event);
  if (authResponse) {
    return authResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/dashboard/:path*",
    "/admin",
    "/admin/:path*",
    "/attendance",
    "/attendance/:path*",
    "/curriculum",
    "/curriculum/:path*",
    "/profile",
    "/settings",
    "/callback",
  ],
};
