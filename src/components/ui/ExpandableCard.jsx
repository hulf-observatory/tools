import { useState } from 'react';

const PlusMinusIcon = ({ expanded }) => (
  <svg style={{ width: 12, height: 12, pointerEvents: 'none' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d={expanded ? 'M4 12h16' : 'M12 4v16M4 12h16'} />
  </svg>
);

export default function ExpandableCard({ theme, title, source, children, comingSoon }) {
  const [expanded, setExpanded] = useState(false);

  const toggle = (e) => {
    if (e.target.tagName === 'A') return;
    setExpanded((v) => !v);
  };

  return (
    <div
      className={`exp-card hover-hatch${comingSoon ? ' coming-soon' : ''}`}
      onClick={toggle}
      role="button"
      aria-expanded={expanded}
    >
      {theme && (
        <p className="exp-card-theme hatch-bg-text">
          {theme}
          {comingSoon && <span className="exp-card-badge">SOON</span>}
        </p>
      )}
      <h3 className="exp-card-title hatch-bg-text">{title}</h3>
      {source && <p className="exp-card-source hatch-bg-text" dangerouslySetInnerHTML={{ __html: source }} />}

      <button
        className="exp-card-toggle"
        onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
        aria-label={expanded ? 'Collapse' : 'Expand'}
      >
        <PlusMinusIcon expanded={expanded} />
      </button>

      <div className={`exp-card-body${expanded ? ' expanded' : ''}`} aria-hidden={!expanded}>
        <div className="exp-card-body-inner" onClick={(e) => e.target.tagName === 'A' && e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}
