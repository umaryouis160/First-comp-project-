import React from "react";

const Middle = () => {
  return (
    <div className="absolute top-[640px] w-full h-[720px] dark:bg-[#14213D]">
      
      {/* Blurred glowing background shape (decoration only) */}
      <div className="hidden sm:block absolute left-[-135px] bottom-[17px] z-30 h-[300px] w-[300px] rounded-full bg-[#00f8d3] dark:bg-[#8726DC] blur-3xl opacity-60 pointer-events-none" />

      <div className="flex items-center gap-20">
        
        {/* Left Content (Text + Buttons) */}
        <div className="flex flex-col justify-center h-[360px] w-[630px] px-15">
          <p className="text-[14px] font-semibold text-gray-700 dark:text-gray-300">
            Innovate
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900 dark:text-white max-w-md">
            Discover Future of AI Technology
          </h1>
          <p className="mt-4 text-[14px] text-black dark:text-white">
            Our AI platform harnesses cutting-edge technology to deliver intelligent solutions tailored to your needs. Experience seamless integration and unparalleled efficiency like never before.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-3 py-1 h-9 rounded-[6px] border border-black bg-white hover:bg-[#f5f5f5] dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/5">
              Learn More
            </button>

            <button className="flex items-center gap-2 px-3 py-1 rounded-[6px] text-black hover:bg-[#f5f5f5] dark:text-white dark:hover:bg-[#262626]">
              Sign up
              <img
                className="dark:invert"
                src="/pics/arrow svg.svg"
                alt="Arrow Icon"
              />
            </button>
          </div>
        </div>

        {/* Right Content (Images) */}
        <div className="relative h-[560px] w-[600px]">
          {/* Main Image */}
          <div className="absolute left-[230px] top-[-10px] h-[560px] w-[400px]">
            <img
              className="h-full w-full object-contain"
              src="/pics/comp1 pic.png"
              alt="Computer 1"
            />
          </div>

          {/* Secondary Floating Image */}
          <div className="absolute top-[-400px] left-[190px] h-[240px] w-[280px]">
            <img
              className="h-full w-full object-contain"
              src="/pics/comp pic.png"
              alt="Computer 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
