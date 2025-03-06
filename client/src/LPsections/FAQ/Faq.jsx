import "./faq.css";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/remove.png";
import phone from "../../assets/vectors/phone3dAsset.png";
import { useEffect, useRef, useState } from "react";
export function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRef = useRef(null);
  const contentRefs = useRef([]);

  const faqInfo = [
    {
      title: "Why choose Ignite Webworks?",
      blurb:
        "Why choose Ignite Webworks? We craft high-performance websites tailored to your business needs, ensuring a seamless user experience. Our designs are visually stunning, responsive, and optimized for all devices. With cutting-edge development and SEO strategies, we help you stand out and attract more customers. We prioritize speed, security, and scalability, so your website grows with you. Partner with us to ignite your online presence and drive real results.",
    },
    {
      title: "How long will a new website take?",
      blurb:
        "The timeline for a new website depends on its complexity and features. A standard site typically takes 4-6 weeks, while more advanced projects may take longer. We work efficiently, keeping you updated throughout the process. Our goal is to deliver a high-quality site on time, without compromising on excellence.",
    },
    {
      title: "What does your SEO include?",
      blurb:
        "Our SEO services focus on the core fundamentals including on-page SEO, technical SEO, content creation, link building and conversion rate optimization. We adopt a holistic approach to ensure we can get you the very best outcome that goes far beyond mere rankings.",
    },
    {
      title: "How can digital marketing help my business?",
      blurb:
        "Digital marketing boosts your online presence, driving more traffic to your website. It helps you reach the right audience through SEO, social media, and targeted ads. With data-driven strategies, you can convert visitors into loyal customers. A strong digital marketing plan fuels business growth and keeps you ahead of the competition.",
    },
  ];

  function handleIndex(index) {
    setActiveIndex(index);
  }

  function clearIndex() {
    setActiveIndex(null);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".faq-card")) {
        clearIndex();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="faq-main-container white-gradient-bg" ref={faqRef}>
      <div className="faq-title">
        <h1 className="oswald-thin-font orange-text title-1">
          Frequently Asked Questions
        </h1>
        <h1 className="oswald-font title-2">F.A.Q.</h1>
      </div>
      <div className="faq-card-img-container">
        <div className="faq-cards-container">
          {faqInfo.map((info, index) => (
            <div className="faq-card" key={info.title}>
              <div className="faq-card-title">
                <h1
                  className={`mont-font ${
                    activeIndex === index && "orange-text"
                  } `}
                  style={{
                    transition: "all .4s",
                  }}
                >
                  {info.title}
                </h1>
                {activeIndex === index ? (
                  <img src={minus} onClick={() => clearIndex()} />
                ) : (
                  <img src={plus} onClick={() => handleIndex(index)} />
                )}
              </div>
              <div
                className="faq-card-info"
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight + 30}px`
                      : "0px",
                  opacity: activeIndex === index ? "1" : "0",
                  overflow: "hidden",
                  paddingTop: activeIndex === index ? "30px" : "0px", // Add smooth spacing
                }}
              >
                <p className="mont-thin-font">{info.blurb}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={phone} className="faq-img" />
      </div>
    </section>
  );
}
