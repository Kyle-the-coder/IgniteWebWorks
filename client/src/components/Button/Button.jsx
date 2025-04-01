import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/right-arrow.png";
import "./button.css";

export function Button({ title, fontSize, location, isArrow, marginTop }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={() => navigate(location)}
      className="button-main orange-bg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ marginTop: marginTop }}
    >
      <h2
        style={{
          fontSize: fontSize,
          zIndex: 2,
          marginRight: isArrow && "20px",
        }}
        className="oswald-thin-font"
      >
        {title}
      </h2>
      {isArrow && (
        <img
          src={arrow}
          style={{ filter: isHover ? "invert(0)" : "invert(1)" }}
        />
      )}

      <div className={`hover-bg ${isHover ? "active" : ""}`}></div>
    </button>
  );
}
