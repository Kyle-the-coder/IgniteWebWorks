import { useEffect, useState, useCallback, act } from "react";
import { useNavigate } from "react-router-dom";
import { Hamburger } from "../Hamburger/Hamburger";
import logo from "../../assets/logo/igniteLogo.png";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import gsap from "gsap";
import "./nav.css";
import { scrollToSection } from "../SmoothScroll";

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
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
        duration: 1.2,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleScrollTo(link) {
    if (isHamburgerActive) {
      if (link === "#contact") {
        handleActivateHamburger();
        setTimeout(() => {
          scrollToSection(link);
        }, 1300);
      } else {
        navigate(link);
        handleActivateHamburger();
      }
    } else {
      if (link === "#contact") {
        scrollToSection(link);
      } else {
        navigate(link);
      }
    }
  }

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-container", {
        transform: "translateX(-100%)",
        duration: 1.2,
        ease: "power3.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isHamburgerActive]);

  return (
    <nav id="nav" className="nav-main-container">
      {windowWidth <= 600 ? (
        <>
          <div className="logo silver-bg">
            <img src={logo} />
          </div>
          <div
            className="nav-hamburger-container silver-bg"
            onClick={() => handleActivateHamburger()}
          >
            <Hamburger isOpened={isAnimationActive} />
          </div>

          {isHamburgerActive && (
            <div className="navbar-phone-dropdown-container grey-gradient-bg">
              <div className="dropdown-links-container">
                {links.map((link, index) => (
                  <div key={link.linkName}>
                    <h3
                      className="oswald-font dropdown-link-name "
                      onClick={() => {
                        handleMouseEnter(index);
                        handleScrollTo(link.link);
                      }}
                    >
                      {link.linkName}
                      {hoverIndex === index && <div className="active"></div>}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
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
                onClick={() => handleScrollTo(link.link)}
                key={link.linkName}
                className="link-container"
              >
                <h1 className="oswald-font">{link.linkName}</h1>
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
