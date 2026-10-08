import { Link } from 'react-router-dom';
import { SITE_URL, SITE_NAV } from '../lib/links';
import useDocumentTitle from '../lib/useDocumentTitle';

// Catch-all route. Pages serves 404.html (= index.html) for unknown paths, so this is
// what a visitor sees for a mistyped or outdated address.
export default function NotFound({ current }) {
  useDocumentTitle('Page not found');
  return (
    <main className="content-main">
      <div className="page-intro">
        <h1>Page not found</h1>
        <p>There is nothing at this address; the page may have moved or the link may be out of date.</p>
      </div>
      <nav className="not-found-links" aria-label="Where to go instead">
        <a href={SITE_URL} rel="noopener">Home</a>
        {SITE_NAV.map(({ key, label, href }) => (key === current ? (
          <Link key={key} to="/">{label}</Link>
        ) : (
          <a key={key} href={href} rel="noopener">{label}</a>
        )))}
      </nav>
    </main>
  );
}
