import { useState, useMemo } from 'react';
import FilterBubbles from '../components/ui/FilterBubbles.jsx';
import ExpandableCard from '../components/ui/ExpandableCard.jsx';
import { TIMELINE_URL } from '../lib/links';
import useDocumentTitle from '../lib/useDocumentTitle';

// The theme vocabulary shared with the stories site; only the themes present in CARDS are shown.
const ALL_FILTERS = [
  { key: 'ENVIRONMENTAL IMPACT', label: 'Environmental Impact' },
  { key: 'URBAN HERITAGE AND ARCHIVE', label: 'Urban Heritage & Archive' },
  { key: 'LAND USE AND LAND COVER', label: 'Land Use & Land Cover' },
  { key: 'WATER', label: 'Water' },
  { key: 'ACCESSIBILITY', label: 'Accessibility & Mobility' },
  { key: 'FLOODS', label: 'Floods' },
  { key: 'TERRAIN', label: 'Terrain' },
  { key: 'WEATHER', label: 'Weather' },
  { key: 'DEMOGRAPHICS', label: 'Demographics' },
  { key: 'GOVERNANCE', label: 'Governance' },
  { key: 'ECONOMIC HISTORY', label: 'Economic History' },
];

const CARDS = [
  {
    themes: ['WEATHER', 'WATER'],
    themeLabel: 'WEATHER, WATER',
    title: 'Weather Dashboard',
    link: 'https://weather.hyderabad.urbanobservatory.in/',
    description: 'Current and recent weather across Hyderabad: rainfall, temperature and other readings from weather stations around the city.',
  },
  {
    themes: ['ACCESSIBILITY', 'DEMOGRAPHICS'],
    themeLabel: 'ACCESSIBILITY, DEMOGRAPHICS',
    title: 'Accessibility Atlas',
    link: 'https://access.hyderabad.urbanobservatory.in',
    description: 'How far can you get on foot along Hyderabad\'s streets? Explore walking reach to schools, parks, toilets and bus and metro stops from any point, compare wards across the city, and see which stops serve the most people.',
  },
  {
    themes: ['WATER', 'FLOODS'],
    themeLabel: 'FLOODS, WATER',
    title: 'Report Floods in Hyderabad',
    link: 'https://floodreport.hyderabad.urbanobservatory.in',
    description: 'Report waterlogging and flood events across Hyderabad in real time. Citizen reports are mapped as they come in, building a ground-level record of where and how flooding affects the city.',
  },
  {
    themes: ['WATER', 'TERRAIN', 'FLOODS'],
    themeLabel: 'WATER, TERRAIN, FLOODS',
    title: 'Lake Atlas — Watershed Explorer',
    link: 'https://lakeatlas.hyderabad.urbanobservatory.in',
    description: 'Explore the watershed structure of ~3,500 HMDA lakes. Click any lake to trace its catchment, upstream drainage network, daily rainfall history, and rooftop harvest potential. Click any point to follow where water flows.',
  },
  {
    themes: ['URBAN HERITAGE AND ARCHIVE', 'LAND USE AND LAND COVER'],
    themeLabel: 'URBAN HERITAGE & ARCHIVE, LAND USE & LAND COVER',
    title: 'City Timeline',
    link: TIMELINE_URL,
    description: "See how Hyderabad changed. Compare archive maps, toposheets and satellite images from 1908 to today, and the 2031 land use plans, side by side, on a time slider, or by swiping between two years.",
  },
];

const PRESENT = new Set(CARDS.flatMap((c) => c.themes));
const FILTERS = [{ key: 'all', label: 'All Themes' }, ...ALL_FILTERS.filter((f) => PRESENT.has(f.key))];

export default function Tools() {
  useDocumentTitle('Tools');
  const [selected, setSelected] = useState(new Set(['all']));

  const toggle = (key) => {
    if (key === 'all') { setSelected(new Set(['all'])); return; }
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete('all');
      if (next.has(key)) {
        next.delete(key);
        if (next.size === 0) next.add('all');
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const shown = useMemo(() => {
    if (selected.has('all')) return CARDS;
    return CARDS.filter((c) => c.themes.some((t) => selected.has(t)));
  }, [selected]);

  return (
    <main className="content-main">
      <div className="page-intro">
        <h1>Tools</h1>
        <p>Interactive maps and dashboards from the Observatory: filter by theme and click on each card to read more.</p>
      </div>

      <FilterBubbles filters={FILTERS} selected={selected} onSelect={toggle} />

      <div className="cards-grid">
        {shown.map((card) => (
          <ExpandableCard key={card.title} theme={card.themeLabel} title={card.title}>
            <p>{card.description}</p>
            <p style={{ marginTop: 16 }}>
              <a href={card.link} rel="noopener" style={{ fontWeight: 500 }}>
                Click here to explore &rarr;
              </a>
            </p>
          </ExpandableCard>
        ))}
      </div>
    </main>
  );
}
