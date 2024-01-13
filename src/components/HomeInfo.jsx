import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to="link" className="neo-btn neo-brutalism-white">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="transition-all animate-bounce neo-brutalism-blue   shadow-lg sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5">
      Hi, i am <span className="font-semibold">Tamara</span> 👋🏼
      <br />A Software Developer from Serbia!
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more!"
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};
export default HomeInfo;
