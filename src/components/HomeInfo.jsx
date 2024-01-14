import { Link } from "react-router-dom";
import cloud from "../assets/images/cloud.webp";

const InfoBox = ({ children }) => (
  <div className="bg-white p-4 rounded-lg opacity-90 shadow-blue-200 text-gray-800 shadow-sm w-1/2 lg:w-1/4 flex">
    <p className="font-medium sm:text-lg text-center">{children}</p>
  </div>
);

const renderContent = {
  1: (
    <div
      style={{
        backgroundImage: `url('${cloud}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "140px",
        width: "263px",
        opacity: "0.9",
        WebkitFilter: "drop-shadow(2px 2px 2px rgba(59, 130, 246, 0.7))",
        filter: "drop-shadow(2px 2px 2px rgba(59, 130, 246, 0.7))",
      }}
      className="flex items-center justify-center transition-opacity ease-in duration-700"
    >
      <p className="text-center mt-4 mr-2 font-medium sm:text-lg">
        Hi, i am <span className="font-semibold">Tamara</span> 👋🏼
      </p>
    </div>
  ),
  2: (
    <InfoBox>
      Visit the{" "}
      <Link to="/about" className="text-[#0072ff]">
        about
      </Link>{" "}
      page to learn more about my software development journey. 🚀
    </InfoBox>
  ),
  3: (
    <InfoBox>
      Look through the{" "}
      <Link to="/experience" className="text-[#0072ff]">
        experience
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
