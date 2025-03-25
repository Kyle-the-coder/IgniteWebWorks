import { ImgGrid } from "../../components/ImgGrid/ImgGrid";
import bg from "../../assets/titlebg.jpg";
import rjp from "../../assets/rjp.png";
import "./projectspage.css";

function ProjectsPage() {
  return (
    <div className="main-page">
      <div className="project-display-top orange-bg">
        <h1 className="oswald-font project-text charcoal-text">Web Projects</h1>
      </div>
      <div className="project-img-display-container orange-bg">
        <img src={bg} className="project-bg" />
        <h1 className="oswald-font white-text">Web Projects</h1>
        <ImgGrid />
      </div>

      <div className="main-page silver-bg">
        <div className="project-display">
          <h1>Royal Jewel Pavalion</h1>
          <img src={rjp} className="project-img" />
        </div>
      </div>
    </div>
  );
}

export const projectsPageRoute = {
  element: ProjectsPage(),
};
