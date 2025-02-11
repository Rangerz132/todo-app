import SunIcon from "../assets/images/icon-sun.svg";
import MoonIcon from "../assets/images/icon-moon.svg";
import { ThemeContext, useThemeContext } from "../contexts/ThemeContext";
import { useEffect } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  function changeTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  }

  return (
    <div onClick={() => changeTheme()} className="cursor-pointer">
      <img src={theme === "light" ? MoonIcon : SunIcon} alt={""} />
    </div>
  );
};

export default ThemeButton;
