import { Link } from 'react-router-dom';
import { SITE_URL, SITE_NAV } from '../../lib/links';

// Footer of the inner pages, as on the main site. On phones the cross-site nav sits here,
// between the content and the footer (the header pills are desktop-only).
export default function AppFooter({ current }) {
  return (
    <>
      <div className="mobile-nav">
        {SITE_NAV.map(({ key, label, href }) => (key === current ? (
          <Link key={key} to="/" className="mobile-nav-link hover-hatch" aria-current="page">
            <span className="hatch-bg-text">{label}</span>
          </Link>
        ) : (
          <a key={key} href={href} rel="noopener" className="mobile-nav-link hover-hatch">
            <span className="hatch-bg-text">{label}</span>
          </a>
        )))}
      </div>

      <footer className="app-footer">
        <div className="footer-note solid-block">
          This website is under continuous development. You may encounter errors or incomplete
          content. Share your feedback at{' '}
          <a href="mailto:hulf.observatory@gmail.com">hulf.observatory@gmail.com</a>
        </div>
        <div className="solid-block">
          <a href={SITE_URL + '/disclaimer'} className="footer-disclaimer-link">
            Disclaimer
          </a>
        </div>
      </footer>
    </>
  );
}
