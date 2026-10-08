export default function FilterBubbles({ filters, selected, onSelect }) {
  return (
    <div className="filter-bar">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-bubble${selected.has(key) ? ' active' : ''}`}
          onClick={() => onSelect(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
