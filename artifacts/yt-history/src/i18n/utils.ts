import type { Locale } from "./types";
import { SUPPORTED_LOCALES } from "./types";

/**
 * Extract locale from a pathname.
 * /pt/guide/... → "pt"
 * /guide/...    → "en" (default)
 */
export function getLocaleFromPath(path: string): Locale {
  const segments = path.replace(/^\//, "").split("/");
  const first = segments[0] as Locale;
  if (SUPPORTED_LOCALES.includes(first) && first !== "en") return first;
  return "en";
}

/**
 * Build the path for a given locale, replacing or inserting the locale prefix.
 * localePath("pt", "/guide/foo") → "/pt/guide/foo"
 * localePath("en", "/pt/guide/foo") → "/guide/foo"
 */
export function localePath(locale: Locale, path: string): string {
  const stripped = path.replace(/^\/(en|pt|es|fr)(\/|$)/, "/");
  if (locale === "en") return stripped;
  return `/${locale}${stripped}`;
}

/**
 * Strip locale prefix from path to get the base path.
 * /pt/guide/foo → /guide/foo
 */
export function stripLocale(path: string): string {
  return path.replace(/^\/(en|pt|es|fr)(\/|$)/, "/");
}
