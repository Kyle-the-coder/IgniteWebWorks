import { Title } from "../../components/Title/Title";

function AboutMe() {
  return (
    <div className="main-page">
      <Title
        title=<h1 className="oswald-font white-text">
          <span className="orange-text">About</span> Me
        </h1>
      />
    </div>
  );
}

export const aboutMeRoute = {
  element: AboutMe(),
};
