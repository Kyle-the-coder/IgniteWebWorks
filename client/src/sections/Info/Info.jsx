import "./info.css";
import businessImg from "../../assets/vectors/BusinessAsset.png";
export function Info() {
  return (
    <section className="info-main-container white-bg">
      <div className="info-title">
        <h1 className="oswald-thin-font orange-text">Fuel Your Business</h1>
      </div>
      <div className="info-body">
        <div className="info-body-title">
          <h2 className="mont-font">🔥 Driving Traffic Like Never Before</h2>
        </div>
        <div className="info-body-info">
          <p className="mont-thin-font">
            Our marketing team works with you to ignite your online presence,
            identifying your target audience and fueling growth with
            comprehensive digital marketing strategies.
          </p>
        </div>
      </div>
      <div className="info-body">
        <div className="info-body-title">
          <h2 className="mont-font">⚡ Powerful Advertising That Converts</h2>
        </div>
        <div className="info-body-info">
          <p className="mont-thin-font">
            We craft high-impact PPC, display, geotargeted, and remarketing
            campaigns designed to accelerate your success. Experience ads that
            spark real results and fuel your bottom line.
          </p>
        </div>
      </div>
      <div className="info-body">
        <div className="info-body-title">
          <h2 className="mont-font">
            💻 Website Design That Ignites Engagement
          </h2>
        </div>
        <div className="info-body-info">
          <p className="mont-thin-font">
            The Ignite Webworks team sets your brand ablaze with cutting-edge
            web design, creating a dynamic, high-performance digital experience
            that captivates your audience.
          </p>
        </div>
      </div>
      <div className="info-body">
        <div className="info-body-title">
          <h2 className="mont-font">
            🚀 Expanding Your Reach, Igniting Connections
          </h2>
        </div>
        <div className="info-body-info">
          <p className="mont-thin-font">
            Our social media experts fuel your brand’s visibility, ensuring your
            message reaches the right audience with a targeted, high-energy
            strategy that sparks engagement and growth.
          </p>
        </div>
      </div>
      <div className="info-vector-container">
        <img src={businessImg} />
      </div>
    </section>
  );
}
