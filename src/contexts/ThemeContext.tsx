import React, { createContext, useContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeType = "light" | "dark";

type ThemeContext = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(
  ThemeContext: React.Context<ThemeContext | null>
) {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be within ThemeContextProvider");
  }

  return context;
}
