import { useState } from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";

export function Button({ title, fontSize, location }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={() => navigate(location)}
      className="button-main grey-gradient-bg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h2
        style={{ fontSize: fontSize, zIndex: 2 }}
        className="oswald-thin-font"
      >
        {title}
      </h2>
      <div className={`hover-bg ${isHover ? "active" : ""}`}></div>
    </button>
  );
}
