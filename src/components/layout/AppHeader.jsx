import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { SITE_URL, SITE_NAV } from '../../lib/links';

// Slim header shared by the Observatory's reading pages (visual standard, 24 Oct 2026). The brand goes to
// the main site; the nav links across the sites. `current` is this site's key in SITE_NAV.
export default function AppHeader({ current }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); burgerRef.current?.focus(); } };
    const onDown = (e) => {
      if (burgerRef.current?.contains(e.target) || menuRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [open]);

  // "Live" (the main site's live page) carries a pulsing dot
  const text = (key, label) => (key === 'live' ? <><i className="obs-live-dot" aria-hidden="true" />{label}</> : label);
  const links = SITE_NAV.map(({ key, label, href }) => (key === current
    ? <Link key={key} to="/" aria-current="page">{text(key, label)}</Link>
    : <a key={key} href={href} rel="noopener" className={key === 'live' ? 'obs-live' : undefined}>{text(key, label)}</a>));

  return (
    <header className="obs-header">
      <a href={SITE_URL} className="obs-brand" aria-label="Hyderabad Urban Observatory, home">
        <span className="obs-logo"><Logo /></span><span className="obs-word">Hyderabad Urban Observatory</span>
      </a>
      <nav className="obs-nav" aria-label="Observatory">{links}</nav>
      <button type="button" ref={burgerRef} className="obs-burger" aria-label="Menu" aria-expanded={open}
        aria-controls="obs-menu" onClick={() => setOpen((o) => !o)}><span /></button>
      {open && <nav className="obs-menu" id="obs-menu" ref={menuRef} aria-label="Observatory">{links}</nav>}
    </header>
  );
}
