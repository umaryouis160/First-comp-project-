import React from "react";

const Middle1 = () => {
  return (
    <div className="relative top-[1160px] h-[720px]">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute right-[10px] bottom-[-135px] z-40 h-[400px] w-[400px] rounded-full bg-[#00f8d3] dark:bg-[#8726DC] opacity-30 blur-3xl pointer-events-none" />

        {/* Section Heading */}
        <div className="z-10 max-w-xl px-10 text-center">
          <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Innovate
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            Discover Our Cutting-Edge AI Solutions
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Our platform harnesses the power of AI to transform your business
            processes. Experience seamless integration and enhanced productivity
            like never before.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="z-10 grid w-full grid-cols-1 gap-6 mt-16 sm:grid-cols-3 py-3">
          {[
            {
              title: "Automated Insights for Smarter Decision Making",
              desc: "Unlock valuable insights with our AI-driven analytics.",
            },
            {
              title: "Intelligent Workflow Automation",
              desc: "Streamline your operations with intelligent process automation.",
            },
            {
              title: "AI-Powered Personalization",
              desc: "Deliver tailored experiences using machine learning.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 text-center"
            >
              {/* Icon */}
              <div className="relative mb-8">
                <img
                  className="h-auto max-w-full object-contain rounded-xl"
                  src="/pics/Vector.png"
                  alt="Feature Icon"
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="z-10 flex items-center justify-center gap-4 mt-16">
          <button className="h-9 rounded-[6px] border border-black px-3 py-1 hover:bg-[#f5f5f5] dark:border-white dark:text-white dark:hover:bg-white/5">
            Learn More
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-[6px] text-black hover:bg-[#f5f5f5] dark:text-white dark:hover:bg-[#262626]">
            Ghost
            <img
              className="dark:invert"
              src="/pics/arrow svg.svg"
              alt="Arrow Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Middle1;
