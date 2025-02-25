import "./nav.css";
import logo from "../../assets/logo/igniteLogo.png";
export function Nav() {
  const links = [
    { linkName: "Home", link: "/" },
    { linkName: "About", link: "/about" },
    { linkName: "Projects", link: "/projects" },
  ];
  return (
    <nav className="nav-main-container">
      <div className="logo silver-bg">
        <img src={logo} />
      </div>
      <div className="links">
        {links.map((link) => (
          <h1 key={link.linkName}>{link.linkName}</h1>
        ))}
      </div>
      <div className="socials"></div>
    </nav>
  );
}
