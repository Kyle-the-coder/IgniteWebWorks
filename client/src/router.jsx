import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { ErrorLayout } from "./layout/ErrorLayout";
import { landingRoute } from "./pages/LandingPage/LandingPage";
import { aboutMeRoute } from "./pages/AboutMePage/AboutMe";
import { projectsPageRoute } from "./pages/ProjectsPage/ProjectsPage";
// import { projectPageRoute } from "./pages/ProjectPage/ProjectPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      { path: "/about", ...aboutMeRoute },
      { path: "/projects", ...projectsPageRoute },
    ],
  },
]);
