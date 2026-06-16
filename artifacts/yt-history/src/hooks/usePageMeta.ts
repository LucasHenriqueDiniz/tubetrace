import { useEffect } from "react";

export function usePageMeta(
  title: string,
  description: string,
  canonical: string,
) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('link[rel="canonical"]', "href", canonical);

    return () => {
      document.title = "TubeTrace — Analyze Your YouTube Watch History";
    };
  }, [title, description, canonical]);
}
