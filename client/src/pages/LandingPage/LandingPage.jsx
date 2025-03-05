import { Faq } from "../../LPsections/FAQ/Faq";
import { Hero } from "../../LPsections/Hero/Hero";
import { Info } from "../../LPsections/Info/Info";
import { Projects } from "../../LPsections/Projects/Projects";
import { Services } from "../../LPsections/Services/Services";
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
