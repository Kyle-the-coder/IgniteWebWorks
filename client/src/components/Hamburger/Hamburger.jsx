import "./hamburger.css";
export function Hamburger({ isOpened }) {
  return (
    <button className="ham-button">
      <svg className="hamburger" fill="black" viewBox="0 0 100 100" width="250">
        <line
          className="line top"
          x1="10"
          x2="90"
          y1="40"
          y2="40"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
        ></line>
      </svg>
    </button>
  );
}
