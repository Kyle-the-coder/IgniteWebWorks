import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/igniteLogo.png";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import gsap from "gsap";
import "./nav.css";

export function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //Phone States
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);
  const navigate = useNavigate();

  const links = [
    { linkName: "Home", link: "/" },
    { linkName: "About", link: "/about" },
    { linkName: "Projects", link: "/projects" },
    { linkName: "Contact", link: "#contact" },
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

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
      setIsAnimtionActive(true);
    } else if (isHamburgerActive) {
      setIsAnimtionActive(false);
      gsap.to(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleScrollTo(link) {
    if (link.startsWith("#")) {
      if (link === "#contact") {
        scrollToSection(link);
      } else if (location.pathname !== "/") {
        navigate("/");
        if (isHamburgerActive) {
          handleActivateHamburger();
          setTimeout(() => {
            scrollToSection(link);
          }, 2000);
        } else if (!isHamburgerActive) {
          setTimeout(() => {
            scrollToSection(link);
          }, 500);
        }
      } else {
        scrollToSection(link);
      }
    } else {
      navigate(link);
    }
    if (isHamburgerActive) handleActivateHamburger();
  }

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isHamburgerActive]);

  return (
    <nav className="nav-main-container">
      {windowWidth <= 600 ? (
        <div className="logo"></div>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
}
