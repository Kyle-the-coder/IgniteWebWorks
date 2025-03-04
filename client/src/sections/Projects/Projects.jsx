import "./project.css";
import wave from "./wave.png";
import waveB from "./waveb.png";
import waveGrad from "./waveGrad.png";
import waveBGrad from "./waveBgrad.png";
import apc from "../../assets/projects/APC.png";
import poke from "../../assets/projects/Poke.png";
import rjp from "../../assets/projects/RJP.png";
import rms from "../../assets/projects/RMS.png";
import { Button } from "../../components/Button/Button";
export function Projects() {
  return (
    <section className="projects-main-container">
      <img src={waveGrad} className="waves-grad" />
      <div className="waves-img">
        <img src={wave} />
      </div>

      <div className="projects-inner-container orange-bg">
        <div className="projects-title">
          <h1 className="oswald-thin-font title-1">OUR PORTFOLIO</h1>
          <h1 className="oswald-font title-2">
            A Collection Of Our Latest Work
          </h1>
        </div>

        <div className="projects-grid-container">
          <div className="project-img-container">
            <img src={apc} />
          </div>
          <div className="project-img-container">
            <img src={poke} />
          </div>
          <div className="project-img-container">
            <img src={rms} />
          </div>
          <div className="project-img-container">
            <img src={rjp} />
          </div>
        </div>
        <Button fontSize="2.5rem" location="/" title="See More" />
      </div>
      <div className="waves-img">
        <img src={waveB} />
      </div>
      <img src={waveBGrad} className="waves-b-grad" />
    </section>
  );
}
