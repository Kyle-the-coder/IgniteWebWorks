import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import "../styles/index.css";
export function MainLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
      <Nav />
      {state === "loading" ? (
        "loading..."
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
