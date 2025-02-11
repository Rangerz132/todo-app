import HeaderBackgroundMobile from "../../assets/images/bg-mobile-dark.jpg";
import HeaderBackgroundDesktop from "../../assets/images/bg-desktop-dark.jpg";

const HeaderBackground = () => {
  return (
    <div>
      {/** Mobile background */}
      <img
        className="w-full md:hidden"
        src={HeaderBackgroundMobile}
        alt="Header"
      />
      {/** Desktop background */}
      <img
        className="w-full hidden md:flex"
        src={HeaderBackgroundDesktop}
        alt="Header"
      />
    </div>
  );
};

export default HeaderBackground;
