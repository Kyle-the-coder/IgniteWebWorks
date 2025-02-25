import { useEffect, useState, useCallback } from "react";
import logo from "../../assets/logo/igniteLogo.png";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import gsap from "gsap";
import "./nav.css";

export function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const links = [
    { linkName: "Home", link: "/" },
    { linkName: "About", link: "/about" },
    { linkName: "Projects", link: "/projects" },
  ];

  const handleMouseEnter = useCallback((index) => {
    setHoverIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  useEffect(() => {
    if (hoverIndex !== null) {
      gsap.from(".active", {
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "power4.out",
        duration: 0.8,
      });
    }
  }, [hoverIndex]);

  return (
    <nav className="nav-main-container">
      <div className="logo silver-bg">
        <img src={logo} />
      </div>
      <div className="links silver-bg">
        {links.map((link, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={link.linkName}
            className="link-container"
          >
            <h1 className="oswald-thin-font">{link.linkName}</h1>
            {hoverIndex === index && <div className="active"></div>}
          </div>
        ))}
      </div>
      <div className="socials silver-bg">
        <img src={fb} />
        <img src={insta} />
      </div>
    </nav>
  );
}
