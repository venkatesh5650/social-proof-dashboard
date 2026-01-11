import { reviews } from "../../data";
import { useState } from "react";
import "./reviewgrid.css";

export default function ReviewGrid({ filter }) {
  const [visible, setVisible] = useState(6);

  const filtered = reviews.filter((r) => {
    if (filter === "top") return r.rating === 5;
    if (filter === "repeat") return r.repeat === true;
    return true;
  });

  return (
    <div className="grid-wrapper">
      <div className="review-grid">
        {filtered.slice(0, visible).map((r, i) => (
          <div className="review-card" key={i}>
            <div className="avatar-wrap">
              <img src={r.avatar} alt={r.name} />
            </div>

            <div className="review-content">
              <h4>{r.name}</h4>
              <p>{r.text}</p>
            </div>

            <div className="review-meta">
              ⭐ {r.rating} • {r.location} • Size: {r.size} •{" "}
              {r.repeat ? "Repeat Buyer" : "First-time"}
            </div>
          </div>
        ))}
      </div>

      {visible < filtered.length && (
        <button className="show-more" onClick={() => setVisible((v) => v + 6)}>
          Show More Reviews
        </button>
      )}
    </div>
  );
}
