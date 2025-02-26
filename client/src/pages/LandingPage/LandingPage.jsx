import { Hero } from "../../components/Hero/Hero";
import "./landingpage.css";
function LandingPage() {
  return (
    <div className="landing-page-main">
      <Hero />
      <div className="dummy">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export const landingRoute = {
  element: LandingPage(),
};
