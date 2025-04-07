import "./contact.css";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/IgniteLogo3d.png";
import phone from "../../assets/icons/telephone.png";
import plane from "../../assets/icons/paper.png";
import gps from "../../assets/icons/gps.png";
import up from "../../assets/icons/up-arrow.png";
import { scrollToSection } from "../SmoothScroll";
export function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="contact" className="contact-main-container charcoal-bg">
      <img
        src={up}
        className="nav-icon"
        alt="to top"
        onClick={() => scrollToSection("#nav")}
      />
      {windowWidth <= 700 ? (
        <>
          {" "}
          <div className="contact-container">
            <div className="contact-info" style={{ marginTop: "40px" }}>
              <h1 className="mont-font">About Us</h1>
              <p className="mont-thin-font">
                We are a web development company designed to bring you a quality
                product that can fuel your business and ignite your online
                presence
              </p>
            </div>
            <div className="contact-info" style={{ marginTop: "50px" }}>
              <h1 className="mont-font">Web Development</h1>
              <ul className="mont-thin-font">
                <li>Business Website</li>
                <li>Web Maintenance</li>
                <li>New or Rework current site</li>
              </ul>
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-info" style={{ marginTop: "50px" }}>
              <h1 className="mont-font">Contact Us</h1>
              <div className="contact-icon-text">
                <img src={phone} />
                <p className="mont-thin-font">707-707-7077</p>
              </div>
              <div className="contact-icon-text">
                <img src={plane} />
                <p className="mont-thin-font">ignitewebworks@gmail.com</p>
              </div>
              <div className="contact-icon-text">
                <img src={gps} />
                <p className="mont-thin-font">Boise, ID</p>
              </div>
            </div>

            <div className="contact-info" style={{ marginTop: "50px" }}>
              <h1 className="mont-font">Policy</h1>
              <ul className="mont-thin-font">
                <li>Terms and Conditions</li>
                <li>Policy</li>
              </ul>
            </div>
          </div>
          <img src={logo} className="contact-logo" />
        </>
      ) : (
        <>
          <div className="contact-container">
            <div className="contact-info">
              <h1 className="mont-font">About Us</h1>
              <p className="mont-thin-font">
                We are a web development company designed to bring you a quality
                product that can fuel your business and ignite your online
                presence
              </p>
            </div>
            <div className="contact-info" style={{ marginTop: "10%" }}>
              <h1 className="mont-font">Web Development</h1>
              <ul className="mont-thin-font">
                <li>Business Website</li>
                <li>Web Maintenance</li>
                <li>New or Rework current site</li>
              </ul>
            </div>
          </div>

          <img src={logo} className="contact-logo" />

          <div className="contact-container">
            <div className="contact-info">
              <h1 className="mont-font">Contact Us</h1>
              <div className="contact-icon-text">
                <img src={phone} />
                <p className="mont-thin-font">707-707-7077</p>
              </div>
              <div className="contact-icon-text">
                <img src={plane} />
                <p className="mont-thin-font">ignitewebworks@gmail.com</p>
              </div>
              <div className="contact-icon-text">
                <img src={gps} />
                <p className="mont-thin-font">Boise, ID</p>
              </div>
            </div>

            <div className="contact-info switch" style={{ marginTop: "10%" }}>
              <h1 className="mont-font">Policy</h1>
              <ul className="mont-thin-font">
                <li className="link">Terms and Conditions</li>
                <li className="link">Policy</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
