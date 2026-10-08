import { useEffect } from 'react';

const SITE = 'Hyderabad Urban Observatory';

// Sets the browser tab title for a page: "<Page> · Hyderabad Urban Observatory",
// or just the site name when called without a page (home).
export default function useDocumentTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} · ${SITE}` : SITE;
  }, [page]);
}
