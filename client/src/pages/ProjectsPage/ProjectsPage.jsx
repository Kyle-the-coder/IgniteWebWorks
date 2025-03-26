import { ImgGrid } from "../../components/ImgGrid/ImgGrid";
import bg from "../../assets/titlebg.jpg";
import rjp from "../../assets/rjp.png";
import "./projectspage.css";
import { ProjectIntro } from "../../SectionsProjects/ProjectIntro/ProjectIntro";

function ProjectsPage() {
  return (
    <div className="main-page">
      <ProjectIntro />

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
