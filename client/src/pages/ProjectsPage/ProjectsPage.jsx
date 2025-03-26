import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import "./projectspage.css";
import { ProjectIntro } from "../../SectionsProjects/ProjectIntro/ProjectIntro";
import { ProjectDisplay } from "../../SectionsProjects/ProjectDisplay/ProjectDisplay";

function ProjectsPage() {
  return (
    <div className="main-page">
      <ProjectIntro />

      <ProjectDisplay />
    </div>
  );
}

export const projectsPageRoute = {
  element: ProjectsPage(),
};
