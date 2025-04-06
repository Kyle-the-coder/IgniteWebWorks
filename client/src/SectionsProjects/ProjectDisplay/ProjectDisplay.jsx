import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import apc from "../../assets/apc.png";
import poke from "../../assets/poke.png";
import { Button } from "../../components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projectdisplay.css";

export function ProjectDisplay() {
  const projectInfo = [
    {
      title: "Renewed Mobility Solutions",
      img: rms,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",

      img2: "",
      title2: "Calendar",
      img3: "",
      title3: "Contact",
    },
    {
      title: "Royal Jewel Pavillion",
      img: rjp,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",

      img2: "",
      title2: "Product Page",
      img3: "",
      title3: "Services Page",
    },
    {
      title: "Apple Pie Cafe",
      img: apc,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",

      img2: "",
      title2: "Review Section",
      img3: "",
      title3: "Review Form",
    },
    {
      title: "Pokemon Stay",
      img: poke,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      ui: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",

      img2: "",
      title2: "Game Page",
      img3: "",
      title3: "Captured Page",
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
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        swipeable={false}
        className="carousel"
      >
        {projectInfo.map((info, index) => {
          return (
            <div
              key={info.title}
              id={index}
              className="project-display white-bg "
            >
              <div className="project-display-title orange-bg">
                <h1 className="oswald-font ">{info.title}</h1>
              </div>
              <div className="flex">
                <div className="project-display-img-container">
                  <img src={info.img} />
                </div>

                <div className="project-display-info charcoal-bg white-text">
                  <div className="project-exp-info">
                    <h2 className="mont-font">Company Description:</h2>
                    <p className="mont-font">{info.desc}</p>
                  </div>

                  <div className="project-exp-info">
                    <h2 className="mont-font">Goal:</h2>
                    <p className="mont-font">{info.desc}</p>
                  </div>

                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    className="carousel-2 "
                  >
                    <div className="project-exp-img">
                      <img src={info.img} />
                      <h4 className="oswald-thin-font legend">Landing Page</h4>
                    </div>
                    <div className="project-exp-img">
                      <img src={info.img} />
                      <h4 className="oswald-thin-font legend">{info.title2}</h4>
                    </div>
                    <div className="project-exp-img">
                      <img src={info.img} />
                      <h4 className="oswald-thin-font legend">{info.title3}</h4>
                    </div>
                  </Carousel>

                  <div className="project-exp-button">
                    <Button
                      fontSize="2rem"
                      location="/"
                      title="See Website"
                      isArrow={false}
                      marginTop="50px"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
