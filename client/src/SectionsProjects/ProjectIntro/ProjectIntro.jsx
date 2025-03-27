import { ImgGrid } from "../../components/ImgGrid/ImgGrid";
import bg from "../../assets/titlebg2.jpg";
import "./projectintro.css";
export function ProjectIntro() {
  return (
    <>
      <div className="project-display-top orange-bg">
        <h1 className="oswald-font project-text charcoal-text">Web Projects</h1>
      </div>
      <div className="project-img-display-container orange-bg">
        <img src={bg} className="project-bg" />
        <h1 className="oswald-font white-text">Web Projects</h1>
        <ImgGrid />
      </div>
    </>
  );
}
