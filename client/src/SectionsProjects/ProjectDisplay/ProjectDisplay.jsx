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
  console.log(activeIndex);
  return (
    <div className="main-page white-bg">
      {projectInfo.map((info, index) => {
        return (
          <div
            key={info.title}
            className="project-display charcoal-bg white-text"
            onClick={(e) => {
              e.stopPropagation();
              activeIndex === index ? clearIndex() : handleIndex(index);
            }}
          >
            <div className="project-dis-title">
              <h1>{info.title}</h1>
              <img src={info.img} className="project-img" />
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
