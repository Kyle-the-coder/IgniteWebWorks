import { useEffect, useRef, useState } from "react";
import "./projectdisplay.css";
import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import apc from "../../assets/apc.png";
import poke from "../../assets/poke.png";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function ProjectDisplay() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const contentRefs = useRef([]);

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

  function handleIndex(index) {
    const element = document.getElementById(`${index}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    }, [300]);
  }

  function clearIndex() {
    setActiveIndex(null);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".project-display")) {
        clearIndex();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-page dark-grey-gradient-bg">
      {projectInfo.map((info, index) => {
        return (
          <div
            key={info.title}
            id={index}
            className="project-display white-bg "
            onClick={() => {
              handleIndex(index);
            }}
          >
            <div className="project-dis-title">
              <h1
                className={`mont-font ${
                  activeIndex === index && "orange-text"
                }`}
              >
                {info.title}
              </h1>
              <div></div>
              <img
                src={info.img}
                style={{
                  transition: "all 1s",
                  borderRadius: "10px",
                  backgroundClip: "padding-box",
                  outline:
                    activeIndex === index
                      ? "4px solid #f57c00"
                      : "2px solid black",
                  outlineOffset: activeIndex === index ? "0px" : "3px",
                }}
                width={`${activeIndex === index ? "450px" : "300px"}`}
              />
            </div>

            <div
              className="project-display-info"
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight + 700}px`
                    : "0px",
                opacity: activeIndex === index ? "1" : "0",
                overflow: "hidden",
                paddingTop: activeIndex === index ? "30px" : "0px",
              }}
            >
              <div className="project-exp-info">
                <h2 className="mont-font">Company Description:</h2>
                <p className="mont-font">{info.desc}</p>
              </div>
              <div className="project-exp-info">
                <h2 className="mont-font">UI & UX:</h2>
                <p className="mont-font">{info.desc}</p>
              </div>
              <div className="project-exp-imgs">
                <div className="project-exp-img">
                  <img src={info.img} />
                  <h4 className="oswald-thin-font">Landing Page</h4>
                </div>
                <div className="project-exp-img">
                  <img src={info.img} />
                  <h4 className="oswald-thin-font">Calendar</h4>
                </div>{" "}
                <div className="project-exp-img">
                  <img src={info.img} />
                  <h4 className="oswald-thin-font">Landing Page</h4>
                </div>
              </div>
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
    </div>
  );
}
