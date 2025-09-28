import React from 'react'

const Final = () => {
  return (
    <div className="relative flex justify-center px-4 py-10 h-180 top-[1150px] dark:bg-[#14213D]">
      {/* --------- CONTAINER --------- */}
      <div className="flex justify-between items-center gap-10 max-w-7xl w-full">
        
        {/* --------- LEFT CONTENT --------- */}
        <div className="flex flex-col gap-4 max-w-md text-left">
          {/* Tools Button */}
          <button className="dark:bg-[#8726DC] rounded-md text-sm font-medium transition-all shadow-xs bg-[#02D9C0] hover:bg-[#171717] dark:hover:bg-[#8726DC] cursor-pointer mb-8 px-5 py-3 text-white w-fit self-start">
            Tools
          </button>

          {/* Heading */}
          <h1 className="text-2xl font-semibold leading-snug tracking-tight dark:text-white">
            Empower Your Creativity with AI-Driven Tools
          </h1>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Harness the transformative power of AI to streamline complex processes, 
            boost creativity, and deliver unmatched results across industries.
          </p>
        </div>

        {/* --------- RIGHT IMAGE --------- */}
        <div className="w-full max-w-[800px]">
          {/* Light Mode Image */}
          <img
            className="w-full h-auto object-cover dark:hidden object-top"
            src="public/pics/Galaxy.webp"
            alt="AI creativity tools illustration - light theme"
          />
          {/* Dark Mode Image */}
          <img
            className="w-full h-auto hidden dark:block object-cover object-top"
            src="public/pics/tab.webp"
            alt="AI creativity tools illustration - dark theme"
          />
        </div>
      </div>
    </div>
  )
}

export default Final
