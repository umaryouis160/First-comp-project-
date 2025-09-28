import { useState, useEffect } from "react";

export default function Toggle() {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme on mount & when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-6 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}
