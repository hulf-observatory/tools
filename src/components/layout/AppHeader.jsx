import { Link } from 'react-router-dom';
import Logo from './Logo';
import { SITE_URL, SITE_NAV } from '../../lib/links';

// Header of the inner pages, as on the main site. The brand goes back to the main site;
// the nav links across the Observatory's sites. `current` is this site's key in SITE_NAV.
export default function AppHeader({ current }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <a href={SITE_URL} className="logo-link hover-hatch">
          <Logo />
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <a href={SITE_URL} className="header-title-link solid-block">
            <h1 className="header-title">
              Hyderabad<br />
              <strong>Urban Observatory</strong>
            </h1>
          </a>
        </div>
      </div>

      <nav className="header-nav" aria-label="Observatory sites">
        {SITE_NAV.map(({ key, label, href }) => (key === current ? (
          <Link key={key} to="/" className="header-nav-link hover-hatch" aria-current="page">
            <span className="hatch-bg-text">{label}</span>
          </Link>
        ) : (
          <a key={key} href={href} rel="noopener" className="header-nav-link hover-hatch">
            <span className="hatch-bg-text">{label}</span>
          </a>
        )))}
      </nav>
    </header>
  );
}
