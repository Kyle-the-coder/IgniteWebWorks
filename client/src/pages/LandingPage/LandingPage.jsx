import { Faq } from "../../SectionsLanding/FAQ/Faq";
import { Hero } from "../../SectionsLanding/Hero/Hero";
import { Info } from "../../SectionsLanding/Info/Info";
import { Projects } from "../../SectionsLanding/Projects/Projects";
import { Services } from "../../SectionsLanding/Services/Services";
function LandingPage() {
  return (
    <div className="main-page">
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
