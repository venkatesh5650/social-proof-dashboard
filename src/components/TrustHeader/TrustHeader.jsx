import { reviews } from "../../data";
import "./trustheader.css";

export default function TrustHeader() {
  const avg = (
    reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="trust-hero">
      <div className="trust-badge">🔥 Trending Product</div>

      <h1 className="trust-title">
        Loved by <span>{reviews.length * 20}+</span> Peanut Butter Fans
      </h1>

      <div className="trust-score">
        <span className="stars">★★★★★</span>
        <span className="score">{avg}</span>
        <span className="based">Based on {reviews.length} reviews</span>
      </div>

      <div className="trust-sub">
        Real reviews from real people who love bold, healthy flavors 🥜
      </div>
    </section>
  );
}
