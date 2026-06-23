export default function Sidebar({ categories, activeComponent, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Components</h2>
        <span className="sidebar-count">{Object.values(categories).flat().length} patterns</span>
      </div>
      <div className="sidebar-list">
        {Object.entries(categories).map(([category, components]) => (
          <div key={category} className="sidebar-category">
            <h3 className="category-title">{category}</h3>
            <div className="category-items">
              {components.map(name => (
                <button
                  key={name}
                  className={`category-item ${activeComponent === name ? 'active' : ''}`}
                  onClick={() => onSelect(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}