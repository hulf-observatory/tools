export default function Logo() {
  return (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <defs>
        <rect id="logo-bar-H1" x="2" y="26" width="96" height="16" rx="6" />
        <rect id="logo-bar-H2" x="2" y="58" width="96" height="16" rx="6" />
        <rect id="logo-bar-V1" x="28" y="2" width="16" height="96" rx="6" transform="rotate(18 36 50)" />
        <rect id="logo-bar-V2" x="56" y="2" width="16" height="96" rx="6" transform="rotate(18 64 50)" />
        <mask id="logo-cut-H1">
          <rect width="100" height="100" fill="white" />
          <use href="#logo-bar-V1" fill="black" stroke="black" strokeWidth="4" />
        </mask>
        <mask id="logo-cut-V2">
          <rect width="100" height="100" fill="white" />
          <use href="#logo-bar-H1" fill="black" stroke="black" strokeWidth="4" />
        </mask>
        <mask id="logo-cut-H2">
          <rect width="100" height="100" fill="white" />
          <use href="#logo-bar-V2" fill="black" stroke="black" strokeWidth="4" />
        </mask>
        <mask id="logo-cut-V1">
          <rect width="100" height="100" fill="white" />
          <use href="#logo-bar-H2" fill="black" stroke="black" strokeWidth="4" />
        </mask>
      </defs>
      <g fill="#FFFFFF" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <use href="#logo-bar-H1" mask="url(#logo-cut-H1)" />
        <use href="#logo-bar-V2" mask="url(#logo-cut-V2)" />
        <use href="#logo-bar-H2" mask="url(#logo-cut-H2)" />
        <use href="#logo-bar-V1" mask="url(#logo-cut-V1)" />
      </g>
    </svg>
  );
}
