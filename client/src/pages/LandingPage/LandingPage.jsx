import { Contact } from "../../LPsections/Contact/Contact";
import { Faq } from "../../LPsections/FAQ/Faq";
import { Hero } from "../../LPsections/Hero/Hero";
import { Info } from "../../LPsections/Info/Info";
import { Projects } from "../../LPsections/Projects/Projects";
import { Services } from "../../LPsections/Services/Services";
function LandingPage() {
  return (
    <div className="main-page">
      <Hero />
      <Services />
      <Info />
      <Projects />
      <Faq />
      <Contact />
    </div>
  );
}

export const landingRoute = {
  element: LandingPage(),
};
