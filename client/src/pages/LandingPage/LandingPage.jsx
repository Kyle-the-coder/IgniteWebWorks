import { Hero } from "../../sections/Hero/Hero";
import { Services } from "../../sections/Services/Services";
import "./landingpage.css";
function LandingPage() {
  return (
    <div className="landing-page-main">
      <Hero />
      <Services />
      <div className="dummy">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export const landingRoute = {
  element: LandingPage(),
};
