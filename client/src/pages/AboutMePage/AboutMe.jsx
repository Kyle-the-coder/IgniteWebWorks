import { Title } from "../../components/Title/Title";
import headshot from "../../assets/newHsBg.png";

function AboutMe() {
  return (
    <div className="main-page">
      <Title
        title=<h1 className="oswald-font white-text">
          <span className="orange-text">About</span> Me
        </h1>
      />

      <div className="main-page grey-gradient-bg">
        <div className="flex">
          <div className="about-info">
            <p>
              My name is Kyle Mitchell and I am the founder and owner of Ignite
              Webworks, I have been working in the digital world for a few years
              now and I am excited to show what I can offer! I am aiming to help
              small businesses create an online platform that will help their
              business grow and Ignite their passion. I believe everyone
              deserves a chance in this world I want to help boost business
              owners forward to reach their goals.
            </p>
          </div>
          <img src={headshot} className="about-img" />
        </div>
      </div>
    </div>
  );
}

export const aboutMeRoute = {
  element: AboutMe(),
};
