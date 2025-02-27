import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { ErrorLayout } from "./layout/ErrorLayout";
import { landingRoute } from "./pages/LandingPage/LandingPage";
// import { aboutRoute } from "./pages/About/About";
// import { projectPageRoute } from "./pages/ProjectPage/ProjectPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      //   { path: "/about", ...aboutRoute },
      //   { path: "/projects", ...projectPageRoute },
    ],
  },
]);
