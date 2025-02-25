import heroBg from "../../assets/igniteHero.webp";
import "./hero.css";
export function Hero() {
  return (
    <div className="hero-main-container">
      <img src={heroBg} />
      <h1 className="oswald-font white-text">
        <span className="orange-text">IGNITE</span> Your
      </h1>
      <h1 className="oswald-font white-text">Online Presence</h1>
    </div>
  );
}
