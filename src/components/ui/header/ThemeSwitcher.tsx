"use client";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function ThemeSwitcherComponent() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.documentElement.classList.toggle("dark", localTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-0 w-10 h-10 border text-lg dark:border-neutral-700 dark:text-neutral-200 rounded-lg transition-all hover:opacity-80"
    >
      {theme === "light" 
      ? (<FontAwesomeIcon style={{fontSize:"1rem"}} icon={faMoon} />) 
      : (<FontAwesomeIcon icon={faSun} />)}
    </button>
  );
}
