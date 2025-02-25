import "./nav.css";
import logo from "../../assets/logo/igniteLogo.png";
export function Nav() {
  return (
    <nav className="nav-main-container">
      <div className="logo silver-bg">
        <img src={logo} />
      </div>
      <div className="links"></div>
      <div className="socials"></div>
    </nav>
  );
}
