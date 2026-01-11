import "./trustfilters.css";

export default function TrustFilters({ active, setActive }) {
  const filters = [
    { id: "all", label: "🔥 All" },
    { id: "top", label: "⭐ Top Rated" },
    { id: "repeat", label: "♻ Repeat Buyers" },
    { id: "natural", label: "🌱 100% Natural" }
  ];

  return (
    <div className="trust-buttons">
      {filters.map((f) => (
        <button
          key={f.id}
          className={`trust-btn ${active === f.id ? "active" : ""}`}
          onClick={() => setActive(f.id)}
        >
          <span className="trust-btn-label">{f.label}</span>
        </button>
      ))}
    </div>
  );
}
