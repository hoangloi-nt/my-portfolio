import React from "react";
import useDarkMode from "hooks/useDarkMode";
import { darkmodeStore } from "store/darkmode-store";

import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const DarkmodeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const { toggleDarkmode } = darkmodeStore((state) => state);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toggleDarkmode(darkMode);
  };

  return (
    <div
      onClick={handleToggleDarkMode}
      className="flex items-center justify-center w-12 h-12 p-2 rounded-lg shadow-lg dark:border dark:border-text group"
    >
      {!darkMode ? (
        <SunIcon className="w-full h-full group-hover:animate-spin"></SunIcon>
      ) : (
        <MoonIcon className="w-full h-full group-hover:animate-spin"></MoonIcon>
      )}
    </div>
  );
};

export default DarkmodeButton;
