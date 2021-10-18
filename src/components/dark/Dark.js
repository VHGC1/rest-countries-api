import React, { useState } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
import { Button } from "./Dark.styles";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { toggleTheme } = useTheme();

  const changeTheme = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  };

  return (
    <>
      <modeContext>
        <Button
          onClick={changeTheme}
          className={!darkMode ? "light-theme" : undefined}
        >
          {darkMode ? <IoMoon /> : <IoMoonOutline />} Dark Mode
        </Button>
      </modeContext>
    </>
  );
};

export default Dark;
