import TrustHeader from "./components/TrustHeader/TrustHeader";
import TrustFilters from "./components/TrustFilters/TrustFilters";
import ReviewSpotlight from "./components/ReviewSpotlight/ReviewSpotlight";
import ReviewGrid from "./components/ReviewGrid/ReviewGrid";
import CommunityPulse from "./components/CommunityPulse/CommunityPulse";
import TrustFooter from "./components/TrustFooter/TrustFooter";

import { useState } from "react";
import "./App.css";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="app">
      <TrustHeader />
      <div className="filters-row">
        <TrustFilters active={activeFilter} setActive={setActiveFilter} />
        <CommunityPulse />
      </div>

      <ReviewSpotlight filter={activeFilter} />
      <ReviewGrid filter={activeFilter} />
      <TrustFooter />
    </div>
  );
}
