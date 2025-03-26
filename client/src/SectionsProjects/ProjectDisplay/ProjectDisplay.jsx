import { useEffect, useRef, useState } from "react";
import "./projectdisplay.css";
import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import apc from "../../assets/apc.png";
import poke from "../../assets/poke.png";

export function ProjectDisplay() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const projectInfo = [
    { title: "Renewed Mobility Solutions", img: rms },
    { title: "Royal Jewel Pavillion", img: rjp },
    { title: "Apple Pie Cafe", img: apc },
    { title: "Pokemon Stay", img: poke },
  ];

  function handleIndex(index) {
    setActiveIndex(index);
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
            className="project-display white-bg "
            onClick={(e) => {
              e.stopPropagation();
              activeIndex === index ? clearIndex() : handleIndex(index);
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
                  transition: "all .8s",
                  borderRadius: "10px",
                  backgroundClip: "padding-box",
                  outline:
                    activeIndex === index
                      ? "4px solid #f57c00"
                      : "2px solid black",
                  outlineOffset: activeIndex === index ? "0px" : "3px",
                }}
                width={`${activeIndex === index ? "500px" : "300px"}`}
              />
            </div>

            <div
              className="project-display-info"
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight + 30}px`
                    : "0px",
                opacity: activeIndex === index ? "1" : "0",
                overflow: "hidden",
                paddingTop: activeIndex === index ? "30px" : "0px",
              }}
            >
              <p>
                fjkld jkl ;fd jl;fd l;fds jlfjdkshfuio h hioew oinf ioejw jiof;
                jio; jeio jio;e jios;j io;ej io;ejiso; jeio;s
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
