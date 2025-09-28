import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState( () => localStorage.getItem("theme") === "dark");
;

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");

    }
  }, []);

  // Apply theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log(darkMode, "dark mode on")
  }, [darkMode]);

  return (
    <div>
<nav className="fixed top-0 w-full  z-50 backdrop-blur-md transition-colors duration-300">
<div className="flex items-center justify-between py-2 px-18">
          {/* Logo + Title */}
          <div className="h-5 flex gap-3 items-center justify-center">
            <img className="w-5 h-5" src="/pics/Vector.png" alt="Logo" />
            <h2 className="font-[600] text-[20px] cursor-pointer dark:text-white">
              Neuralcrafts
            </h2>
          </div>

          {/* Menu + Buttons */}
          <div className="flex items-center justify-center gap-5 text-black dark:text-white ">
            <ul className="flex gap-8">
              <li className="cursor-pointer hover:text-gray-400 dark:hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-gray-400 dark:hover:text-white">Dashboard</li>
              <li className="cursor-pointer hover:text-gray-400 dark:hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-gray-400 dark:hover:text-white">More</li>
            </ul>

            <button className="cursor-pointer rounded-md border border-black dark:border-white hover:bg-black dark:hover:bg-transparent hover:text-white px-[35px] py-[5px]">
              Join
            </button>

            <button className="cursor-pointer bg-black dark:bg-white border border-black text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-white px-[26px] py-[6px] rounded-md">
              Sign Up
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-4xl h-10 w-10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer bg-white dark:bg-transparent border border-white/40 m-1"
            >
              {darkMode ? (
                <img
                src="public\pics\dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Dark Mode"
              />
              ) : (
                <img
                  src="/pics/light_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Light Mode"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
