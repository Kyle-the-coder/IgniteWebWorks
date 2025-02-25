import { Hero } from "../../components/Hero/Hero";
import "./landingpage.css";
function LandingPage() {
  return (
    <div className="landing-page-main">
      <Hero />
    </div>
  );
}

export const landingRoute = {
  element: LandingPage(),
};
