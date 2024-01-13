import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
import cloud from "../assets/images/cloud.webp";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-btn neo-brutalism-white">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
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
        WebkitFilter: "drop-shadow(5px 5px 5px rgba(59, 130, 246, 0.7))",
        filter: "drop-shadow(5px 5px 5px rgba(59, 130, 246, 0.7))",
      }}
      className="flex items-center justify-center transition-opacity ease-in duration-700"
    >
      <span className="text-center mt-4 mr-2">
        Hi, i am <span className="font-semibold">Tamara</span> 👋🏼
      </span>
    </div>
  ),
  2: (
    <InfoBox
      text="Had an interesting journey to get here, wanna know more?"
      link="/about"
      btnText="Learn more!"
    />
  ),
  3: (
    <InfoBox
      text="Worked on many interesting projects!"
      link="/experience"
      btnText="Check out my experience!"
    />
  ),
  4: (
    <InfoBox
      text="Need a developer? Lets get in touch!"
      link="/contact"
      btnText="Let's talk!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};
export default HomeInfo;
