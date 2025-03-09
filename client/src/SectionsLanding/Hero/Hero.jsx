import { useEffect, useState } from "react";
import heroBg from "../../assets/igniteHero.webp";
import heroBgMobile from "../../assets/igniteHeroMobile2.jpg";
import "./hero.css";

export function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero-main-container">
      {windowWidth <= 600 ? (
        <>
          <img src={heroBgMobile} />
          <h1 className="oswald-font white-text">
            <span className="orange-text">IGNITE</span> Your Online Presence
          </h1>
        </>
      ) : (
        <>
          <img src={heroBg} />{" "}
          <h1 className="oswald-font white-text">
            <span className="orange-text">IGNITE</span> Your
          </h1>
          <h1 className="oswald-font white-text">Online Presence</h1>
        </>
      )}
    </section>
  );
}
