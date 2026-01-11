import { reviews } from "../../data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./reviewspotlight.css";

export default function ReviewSpotlight({ filter }) {
  const filtered = reviews.filter((r) => {
    if (filter === "top") return r.rating === 5;
    if (filter === "repeat") return r.repeat === true;
    return true;
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [filter]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % filtered.length);
    }, 7200);
    return () => clearInterval(t);
  }, [filtered.length]);

  const r = filtered[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className="spotlight"
        initial={{ opacity: 0, y: 14, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -14, scale: 0.975 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="spotlight-avatar">
          <img src={r.avatar} alt={r.name} />
        </div>

        <div className="spotlight-content">
          <h3>
            {r.name} <span>— {r.location}</span>
          </h3>
          <p>"{r.text}"</p>
          <small>
            ⭐ {r.rating} • Size: {r.size} •{" "}
            {r.repeat ? "Repeat Buyer" : "First-time"}
          </small>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
