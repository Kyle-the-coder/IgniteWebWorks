import { Faq } from "../../sections/FAQ/Faq";
import { Hero } from "../../sections/Hero/Hero";
import { Info } from "../../sections/Info/Info";
import { Projects } from "../../sections/Projects/Projects";
import { Services } from "../../sections/Services/Services";
import "./landingpage.css";
function LandingPage() {
  return (
    <div className="landing-page-main">
      <Hero />
      <Services />
      <Info />
      <Projects />
      <Faq />
    </div>
  );
}

export const landingRoute = {
  element: LandingPage(),
};
