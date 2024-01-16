import { Link } from "react-router-dom";

const InfoBox = ({ children }) => (
  <div className="bg-white p-4 rounded-lg opacity-90 shadow-blue-200 text-gray-800 shadow-sm w-1/2 lg:w-1/4 flex">
    <div className="font-medium sm:text-lg text-center text-gray-800">
      <>{children}</>
    </div>
  </div>
);

const renderContent = {
  1: (
    <InfoBox>
      <p className="text-center font-medium sm:text-lg text-gray-800">
        Hi, i am{" "}
        <span className="font-semibold blue-gradient_text">Tamara</span> 👋🏼
        <br />
        Take a spin around the island, hop on a plane, and dive into my story!
      </p>
    </InfoBox>
  ),
  2: (
    <InfoBox>
      Explore my software development journey by visiting the{" "}
      <Link to="/about" className="text-[#0072ff]">
        About
      </Link>{" "}
      page. 🚀
    </InfoBox>
  ),
  3: (
    <InfoBox>
      Look through the{" "}
      <Link to="/projects" className="text-[#0072ff]">
        Projects
      </Link>{" "}
      section to see all of the incredible projects I've worked on! 💡
    </InfoBox>
  ),
  4: (
    <InfoBox>
      Want to know more? Feel free to{" "}
      <Link to="/contact" className="text-[#0072ff]">
        contact
      </Link>{" "}
      me!
    </InfoBox>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};
export default HomeInfo;
