import "./imggrid.css";
import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import poke from "../../assets/poke.png";
import apc from "../../assets/apc.png";
import cal from "../../assets/cal.png";

export function ImgGrid() {
  return (
    <div className="img-grid-container-main">
      <div className="grid-container">
        <div className="grid-1">
          <img src={rjp} className="grid-img" />
          <img src={cal} className="grid-img" />
        </div>

        <div className="grid-2">
          <img src={rms} className="grid-img" />
          <img src={apc} className="grid-img" />
          <img src={poke} className="grid-img" />
        </div>
        <div className="grid-3">
          <img src={cal} className="grid-img" />
          <img src={apc} className="grid-img" />
        </div>
      </div>
    </div>
  );
}

export default ImgGrid;
