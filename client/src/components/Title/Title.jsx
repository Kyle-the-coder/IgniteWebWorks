import { useEffect, useState } from "react";
import heroBg from "../../assets/titlebg.jpg";
import heroBgMobile from "../../assets/igniteHeroMobile2.jpg";
import "./title.css";

export function Title({ title }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="title-main-container">
      <img src={heroBg} />
      {title}
    </section>
  );
}
