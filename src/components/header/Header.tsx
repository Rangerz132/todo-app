import Logo from "../Logo";
import ThemeButton from "../ThemeButton";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Logo />
      <ThemeButton />
    </div>
  );
};

export default Header;
