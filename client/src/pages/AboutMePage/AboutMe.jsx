import { Title } from "../../components/Title/Title";

function AboutMe() {
  return (
    <div className="main-page">
      <Title />
    </div>
  );
}

export const aboutMeRoute = {
  element: AboutMe(),
};
