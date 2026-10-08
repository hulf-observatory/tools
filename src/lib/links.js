// Addresses of the other Observatory sites. Each has a build-time override so a local
// checkout can point at a dev server (e.g. VITE_MAPS_URL=http://127.0.0.1:8124).
const trim = (u) => u.replace(/\/$/, '');

// The main site (home, About, Disclaimer)
export const SITE_URL = trim(import.meta.env.VITE_SITE_URL || 'https://hyderabad.urbanobservatory.in');

// Tools (this site's sibling / this site)
export const TOOLS_URL = trim(import.meta.env.VITE_TOOLS_URL || 'https://tools.hyderabad.urbanobservatory.in') + '/';

// Stories & datasets
export const STORIES_URL = trim(import.meta.env.VITE_STORIES_URL || 'https://stories.hyderabad.urbanobservatory.in') + '/';

// Spatial Data Repository (map viewer)
export const MAPS_URL = trim(import.meta.env.VITE_MAPS_URL || 'https://maps.hyderabad.urbanobservatory.in');

// City Timeline (archive maps side by side); keeps its trailing slash: it is linked as-is
export const TIMELINE_URL = trim(import.meta.env.VITE_TIMELINE_URL || 'https://timeline.hyderabad.urbanobservatory.in') + '/';

// The open-data site (catalogue, downloads)
export const DATA_URL = trim(import.meta.env.VITE_DATA_URL || 'https://data.hyderabad.urbanobservatory.in') + '/';

// Header / mobile nav shared by the tools and stories sites. `current` marks this site's entry,
// which is rendered as an in-app link to "/".
export const SITE_NAV = [
  { key: 'tools', label: 'Tools', href: TOOLS_URL },
  { key: 'stories', label: 'Stories', href: STORIES_URL },
  { key: 'data', label: 'Data sources', href: DATA_URL },
  { key: 'about', label: 'About', href: SITE_URL + '/about' },
];
