import "./hamburger.css";
import { useState } from "react";

export function Hamburger() {
  const [isOpened, setIsOpened] = useState(false);

  console.log(isOpened);

  return (
    <button className="ham-button" onClick={() => setIsOpened(!isOpened)}>
      <svg
        className={`hamburger ${isOpened ? "open" : "close"} ${
          isOpened ? "start" : ""
        }`}
        fill="black"
        viewBox="0 0 100 100"
        width="250"
      >
        <line
          className="line top"
          x1="10"
          x2="90"
          y1="30"
          y2="30"
          stroke="black"
          strokeWidth="10"
        ></line>
        <line
          className="line middle"
          x1="10"
          x2="90"
          y1="50"
          y2="50"
          stroke="black"
          strokeWidth="10"
        ></line>
        <line
          className="line bottom"
          x1="10"
          x2="90"
          y1="70"
          y2="70"
          stroke="black"
          strokeWidth="10"
        ></line>
      </svg>
    </button>
  );
}
