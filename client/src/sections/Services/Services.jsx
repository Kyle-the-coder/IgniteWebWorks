import "./services.css";
import devImg from "../../assets/icons/computer.png";
import phoneImg from "../../assets/icons/iphone.png";
import pencilImg from "../../assets/icons/pencil.png";
import searchImg from "../../assets/icons/data-analysis.png";
import { useState } from "react";

export function Services() {
  const [activeIcon, setActiveIcon] = useState(null);
  const icons = [
    { iconImg: devImg, iconName: "Development" },
    { iconImg: phoneImg, iconName: "Responsive" },
    { iconImg: pencilImg, iconName: "Design" },
    { iconImg: searchImg, iconName: "SEO" },
  ];

  function handleActiveIcon(index) {
    setActiveIcon(index);
  }
  console.log(activeIcon);
  return (
    <section className="services-main-container grey-gradient-bg">
      <div className="services-title">
        <h1 className="orange-text oswald-font title-1">OUR SERVICES</h1>
        <h1 className="oswald-font title-2">We Offer The Following Services</h1>
      </div>
      <div className="icons-container">
        {icons.map((icon, index) => (
          <div
            key={icon.iconName}
            className="icon-container"
            onClick={() => handleActiveIcon(index)}
          >
            <img src={icon.iconImg} style={{ zIndex: 2 }} />
            <h1 className="oswald-font" style={{ zIndex: 2 }}>
              {icon.iconName}
            </h1>
            {activeIcon == index && <div className="org-bg"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
