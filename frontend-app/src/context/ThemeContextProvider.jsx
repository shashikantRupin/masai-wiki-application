import React, { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ backGroundColor: "black" });

  const toggleTheme = () => {
    if (theme.backGroundColor == "black") {
      setTheme({ backGroundColor: "white" });
    } else {
      setTheme({ backGroundColor: "black" });
    }
  };
  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
