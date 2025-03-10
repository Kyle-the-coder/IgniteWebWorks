import { Title } from "../../components/Title/Title";

function ProjectsPage() {
  return (
    <div className="main-page">
      <Title
        title=<h1 className="oswald-font white-text">
          <span className="orange-text">Pro</span>jects
        </h1>
      />
    </div>
  );
}

export const projectsPageRoute = {
  element: ProjectsPage(),
};
