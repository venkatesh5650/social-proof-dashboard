import "./trustfooter.css";

export default function TrustFooter() {
  return (
    <footer className="trust-footer">
      <div className="trust-footer-inner">
        <div className="trust-col trust-col-main">
          <h4>Why customers trust us</h4>
          <p>We focus on quality, transparency, and long-term relationships.</p>
        </div>

        <div className="trust-col">
          <ul>
            <li>✔ 100% natural ingredients</li>
            <li>✔ No added preservatives</li>
            <li>✔ Transparent sourcing</li>
          </ul>
        </div>

        <div className="trust-col">
          <ul>
            <li>✔ Secure payments</li>
            <li>✔ Easy returns</li>
            <li>✔ Responsive support</li>
          </ul>
        </div>

        <div className="trust-col trust-col-score">
          <span className="trust-score">4.9 / 5</span>
          <span className="trust-score-label">Customer satisfaction</span>
        </div>
      </div>

      <div className="trust-footer-bottom">
        © {new Date().getFullYear()} NutriSpread — Crafted with care.
      </div>
    </footer>
  );
}
