import "./services.css";
import gsap from "gsap";
import devImg from "../../assets/icons/computer.png";
import phoneImg from "../../assets/icons/iphone.png";
import pencilImg from "../../assets/icons/pencil.png";
import searchImg from "../../assets/icons/data-analysis.png";
import devVec from "../../assets/vectors/DevelopmentAsset.png";
import phoneVec from "../../assets/vectors/ResponsiveAsset.png";
import designVec from "../../assets/vectors/DesignAsset.png";
import seoVec from "../../assets/vectors/SEOAsset.png";
import React, { useEffect, useState } from "react";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [
    { iconImg: devImg, iconName: "Development" },
    { iconImg: phoneImg, iconName: "Responsive" },
    { iconImg: pencilImg, iconName: "Design" },
    { iconImg: searchImg, iconName: "SEO" },
  ];

  const vectors = [
    { vectorImg: devVec, vectorTitle: "Web Development" },
    { vectorImg: phoneVec, vectorTitle: "Responsive Design" },
    { vectorImg: designVec, vectorTitle: "Creative Approaches" },
    { vectorImg: seoVec, vectorTitle: "Search Engine Optimization" },
  ];

  const vectorsInfo = [
    {
      vectorBlerb: "We develop your website to your liking",
      vectorI1: "Any Technology",
      vectorI2: "Online Payment",
      vectorI3: "Email Notifications",
      vectorI4: "Users and Authorization",
    },
    {
      vectorBlerb:
        "We offer responsive design so your website can shine on all devices",
      vectorI1: "UI & UX Implementation",
      vectorI2: "User-Friendly",
      vectorI3: "Mobile Friendly",
      vectorI4: "Interactive Features",
    },
    {
      vectorBlerb: "We create stunning and eye-catching visuals and layouts",
      vectorI1: "Simple Color Pallets",
      vectorI2: "Interactive Elements",
      vectorI3: "Entices Users",
      vectorI4: "Increases Sales",
    },
    {
      vectorBlerb: "Our SEO will have all your clients finding you easily",
      vectorI1: "Meta Data",
      vectorI2: "Top Google Searches",
      vectorI3: "User Friendly",
      vectorI4: "Get More Clients",
    },
  ];

  function handleActiveIndex(index) {
    setActiveIndex(index);
  }

  useEffect(() => {
    gsap.fromTo(
      ".vectors-info-container",
      { y: 100, opacity: 0 }, // Start position: below and invisible
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" } // End position: normal and visible
    );
  }, [activeIndex]);

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
            onClick={() => handleActiveIndex(index)}
          >
            <img src={icon.iconImg} style={{ zIndex: 2 }} />
            <h1 className="oswald-font" style={{ zIndex: 2 }}>
              {icon.iconName}
            </h1>
            {activeIndex == index && <div className="org-bg"></div>}
          </div>
        ))}
      </div>

      <div className="vectors-info-container">
        {vectors.map((vector, index) => (
          <React.Fragment key={vector.vectorTitle}>
            {activeIndex === index && (
              <div className="vector-container">
                <img src={vector.vectorImg} />
              </div>
            )}
            {activeIndex === index && (
              <div className="vector-title">
                <h1 className="mont-font orange-text">{vector.vectorTitle}</h1>
              </div>
            )}
          </React.Fragment>
        ))}
        <div className="vector-info">
          {vectorsInfo.map((info, index) => (
            <React.Fragment key={info.vectorI1}>
              {activeIndex === index && (
                <>
                  <div className="vector-blerb">
                    <h1 className="mont-thin-font ">{info.vectorBlerb}</h1>
                  </div>
                  <div className="vector-grid-container">
                    <div className="vector-rect-inner white-bg">
                      <h1 className="mont-thin-font">{info.vectorI1}</h1>
                    </div>
                    <div className="vector-rect white-bg">
                      <h1 className="mont-thin-font">{info.vectorI2}</h1>
                    </div>
                    <div className="vector-rect-inner white-bg">
                      <h1 className="mont-thin-font">{info.vectorI3}</h1>
                    </div>
                    <div className="vector-rect white-bg">
                      <h1 className="mont-thin-font">{info.vectorI4}</h1>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
