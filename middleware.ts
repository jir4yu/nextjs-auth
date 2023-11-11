export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/member/profile"],
  // matcher: ["/((?!register|api|login).*)", "/member/profile"],
};