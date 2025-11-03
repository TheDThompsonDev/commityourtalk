import { authkitMiddleware } from "@workos-inc/authkit-nextjs";
import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";

const runAuthkit = authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: [
      "/",
      "/pathway",
      "/pathway/(.*)",
      "/curriculum",
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
    "/pathway",
    "/pathway/:path*",
    "/curriculum",
    "/profile",
    "/settings",
    "/callback",
  ],
};
