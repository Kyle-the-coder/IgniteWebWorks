import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layout/NavLayout";
import { ErrorLayout } from "./layout/ErrorLayout";
// import { landingRoute } from "./pages/Landing/Landing";
// import { aboutRoute } from "./pages/About/About";
// import { projectPageRoute } from "./pages/ProjectPage/ProjectPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      //   { path: "/", ...landingRoute },
      //   { path: "/about", ...aboutRoute },
      //   { path: "/projects", ...projectPageRoute },
    ],
  },
]);
