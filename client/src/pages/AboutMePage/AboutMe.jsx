import { Title } from "../../components/Title/Title";

function AboutMe() {
  return (
    <div className="main-page">
      <Title
        title=<h1 className="oswald-font white-text">
          <span className="orange-text">About</span> Me
        </h1>
      />

      <div className="main-page grey-gradient-bg">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export const aboutMeRoute = {
  element: AboutMe(),
};
