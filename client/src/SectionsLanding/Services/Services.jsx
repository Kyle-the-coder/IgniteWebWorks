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
import { Button } from "../../components/Button/Button";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
      vectorTitle: "Web Development",
      vectorBlerb:
        "At Ignite Webworks, we build websites tailored to your vision, ensuring a seamless and engaging user experience. Our designs are modern, responsive, and built for performance, helping your business stand out online. With a focus on speed, SEO, and scalability, we create websites that grow with you. From e-commerce to custom functionality, we develop solutions that drive results. Your ideas fuel our expertise—let’s ignite your online presence together.",
      vectorI1: "Any Technology",
      vectorI2: "Online Payment",
      vectorI3: "Email Notifications",
      vectorI4: "Users and Authorization",
    },
    {
      vectorTitle: "Responsive Design",
      vectorBlerb:
        "At Ignite Webworks, we create responsive websites that adapt seamlessly to any device. Your site will look stunning and function flawlessly on desktops, tablets, and smartphones alike. With mobile-first design and fluid layouts, we ensure an optimal user experience everywhere. Performance, speed, and accessibility are at the core of our development. No matter where your audience is, your website will always shine.",
      vectorI1: "UI & UX Implementation",
      vectorI2: "User-Friendly",
      vectorI3: "Mobile Friendly",
      vectorI4: "Interactive Features",
    },
    {
      vectorTitle: "Creative Approaches",
      vectorBlerb:
        "At Ignite Webworks, we design visually stunning and intuitive websites that captivate users. Every layout is crafted for seamless navigation and a smooth user experience. We blend creativity with functionality to make every interaction effortless. Elevate your brand with a website that’s as beautiful as it is powerful.",
      vectorI1: "Simple Color Pallets",
      vectorI2: "Interactive Elements",
      vectorI3: "Entices Users",
      vectorI4: "Increases Sales",
    },
    {
      vectorTitle: "Search Engine Optimization",
      vectorBlerb:
        "At Ignite Webworks, we optimize your website to rank higher and reach the right audience. Our SEO strategies drive traffic, boost visibility, and keep you ahead of the competition. From keywords to site speed, we fine-tune every detail for maximum impact. Get found easily and turn visitors into loyal customers.",
      vectorI1: "Meta Data",
      vectorI2: "Top Google Searches",
      vectorI3: "User Friendly",
      vectorI4: "Get More Clients",
    },
  ];

  function handleActiveIndex(index) {
    if (index === activeIndex || isAnimating) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(index);
        setIsAnimating(false);
      },
    });

    tl.to([".vector-info", ".vector-container"], {
      y: 100,
      opacity: 0,
      duration: 0.4,
      ease: "power4.inOut",
    });
  }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [".vector-info", ".vector-container"],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power4.out", delay: 0.1 }
    );
  }, [activeIndex]);

  useEffect(() => {
    const vectorImgs = [devVec, phoneVec, designVec, seoVec];
    vectorImgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="services-main-container grey-gradient-bg">
      <div className="services-title">
        <h1 className="orange-text oswald-thin-font title-1">OUR SERVICES</h1>
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
            {activeIndex === index && <div className="org-bg"></div>}
          </div>
        ))}
      </div>

      <div className="vectors-info-container">
        {vectors.map((vector, index) => (
          <React.Fragment key={vector.vectorTitle}>
            {activeIndex === index && (
              <div className="vector-container" key={vector.vectorImg}>
                <img src={vector.vectorImg} />
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="vector-info" key={vectorsInfo[activeIndex].vectorTitle}>
          <div className="vector-title">
            <h1 className="mont-font orange-text">
              {vectorsInfo[activeIndex].vectorTitle}
            </h1>
          </div>
          <div className="vector-blerb">
            <p className="mont-thin-font">
              {vectorsInfo[activeIndex].vectorBlerb}
            </p>
          </div>
          <div className="vector-grid-container">
            <div className="vector-rect-inner white-bg">
              <p className="mont-thin-font">
                {vectorsInfo[activeIndex].vectorI1}
              </p>
            </div>
            <div className="vector-rect white-bg">
              <p className="mont-thin-font">
                {vectorsInfo[activeIndex].vectorI2}
              </p>
            </div>
            <div className="vector-rect-inner white-bg">
              <p className="mont-thin-font">
                {vectorsInfo[activeIndex].vectorI3}
              </p>
            </div>
            <div className="vector-rect white-bg">
              <p className="mont-thin-font">
                {vectorsInfo[activeIndex].vectorI4}
              </p>
            </div>
          </div>
          <Button
            fontSize="2rem"
            location="/"
            title="GET PROPOSAL"
            isArrow={true}
            marginTop="50px"
          />
        </div>
      </div>
    </section>
  );
}
