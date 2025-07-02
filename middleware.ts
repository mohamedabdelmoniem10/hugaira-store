import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",

  // Always use locale prefix
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - _static (inside /public)
  // - all files in the public folder (with a file extension like .png, .jpg, etc.)
  matcher: ["/((?!api|_next|_static|.*\\..*).*)"],
};
