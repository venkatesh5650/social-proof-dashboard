import { useEffect, useState } from "react";
import "./communitypulse.css";

const feed = [
  "Rahul from Pune bought this",
  "Priya left a 5⭐ review",
  "92% customers repeat purchase",
  "Neha from Chennai added this to cart",
  "Vihan from Nashik left a review",
  "Avani from Delhi is a repeat buyer",
  "Sneha from Coimbatore ordered again",
  "Arjun from Surat bought 1kg pack",
  "Meera from Pune rated it 5⭐",
  "Rohan from Mumbai shared feedback"
];

export default function CommunityPulse() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((x) => (x + 1) % feed.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pulse-wrapper">
      <div className="pulse">
        <span className="pulse-icon">🔥</span>
        <span className="pulse-text">{feed[i]}</span>
      </div>
    </div>
  );
}
