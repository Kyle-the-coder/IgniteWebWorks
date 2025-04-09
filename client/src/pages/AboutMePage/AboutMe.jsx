import { Title } from "../../components/Title/Title";
import headshot from "../../assets/newHsBg.png";
import "./aboutme.css";
function AboutMe() {
  return (
    <div className="main-page">
      <svg width="0" height="0">
        <defs>
          <clipPath id="rounded-triangle" clipPathUnits="objectBoundingBox">
            <path d="M1,0.23 C0.95,0.05, 0.1,0.95, 0.81,0.95 Z"></path>
          </clipPath>
        </defs>
      </svg>
      <Title
        title=<h1 className="oswald-font white-text">
          <span className="orange-text">About</span> Me
        </h1>
      />

      <div className="main-page padding ">
        <div className="about-container">
          <div className="about-info">
            <p className="mont-font">
              My name is Kyle Mitchell and I am the founder and owner of{" "}
              <span className="orange-text">Ignite Webworks</span>, I have been
              working in the digital world for a few years now and I am excited
              to show what I can offer! I am aiming to help small businesses
              create an online platform that will help their business grow and
              <span className="orange-text"> Ignite</span> their passion. I
              believe everyone deserves a chance in this world I want to help
              boost business owners forward to reach their goals.
            </p>
          </div>
          <div className="about-img-container">
            <img src={headshot} className="about-img" alt="photo of owner" />
            <div className="orange-tri"></div>
            <div className="black-tri"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const aboutMeRoute = {
  element: AboutMe(),
};
