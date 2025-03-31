import "./projectdisplay.css";
import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import apc from "../../assets/apc.png";
import poke from "../../assets/poke.png";
import { Button } from "../../components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ProjectDisplay() {
  const projectInfo = [
    {
      title: "Renewed Mobility Solutions",
      img: rms,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      title: "Royal Jewel Pavillion",
      img: rjp,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      title: "Apple Pie Cafe",
      img: apc,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      title: "Pokemon Stay",
      img: poke,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  return (
    <div className="main-page dark-grey-gradient-bg">
      <div className="project-quote">
        <h1 className="oswald-thin-font">
          <span className="oswald-font orange-text">Ignite Webworks</span> wants
          to create your dream website to boost your business and your
          confidence
        </h1>
      </div>
      <Carousel showStatus={false} infiniteLoop={true} className="carousel">
        {projectInfo.map((info, index) => {
          return (
            <div
              key={info.title}
              id={index}
              className="project-display white-bg "
            >
              <div className="project-dis-title">
                <h1 className={`mont-font `}>{info.title}</h1>

                <img src={info.img} />
              </div>

              <div className="project-display-info">
                <div className="project-exp-info">
                  <h2 className="mont-font">Company Description:</h2>
                  <p className="mont-font">{info.desc}</p>
                </div>
                <div className="project-exp-info">
                  <h2 className="mont-font">UI & UX:</h2>
                  <p className="mont-font">{info.desc}</p>
                </div>

                <Carousel
                  showArrows={true}
                  showStatus={false}
                  infiniteLoop={true}
                  showThumbs={true}
                  className="carousel-2 dark-grey-gradient-bg"
                >
                  <div className="project-exp-img">
                    <img src={info.img} />
                    <h4 className="oswald-thin-font legend">Landing Page</h4>
                  </div>
                  <div className="project-exp-img">
                    <img src={info.img} />
                    <h4 className="oswald-thin-font legend">Calendar</h4>
                  </div>
                  <div className="project-exp-img">
                    <img src={info.img} />
                    <h4 className="oswald-thin-font legend">Landing Page</h4>
                  </div>
                </Carousel>

                <div className="project-exp-info end">
                  <h2 className="mont-font">Goal:</h2>
                  <p className="mont-font">{info.desc}</p>
                </div>
                <div className="project-exp-button">
                  <Button
                    fontSize="2.5rem"
                    location="/"
                    title="See Website"
                    isArrow={false}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
