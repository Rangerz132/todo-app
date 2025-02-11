import SunIcon from "../assets/images/icon-sun.svg";
import MoonIcon from "../assets/images/icon-moon.svg";

const ThemeButton = () => {
  return (
    <div className="cursor-pointer">
      <img src={MoonIcon} alt={""} />
    </div>
  );
};

export default ThemeButton;
