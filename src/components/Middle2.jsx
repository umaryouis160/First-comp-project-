import React from 'react'

// ✅ Component should use PascalCase for naming in React
const Middle2 = () => {
  return (
    <div className="relative top-[1150px] flex flex-col overflow-hidden">
      
      {/* ----------------- HEADER SECTION ----------------- */}
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center max-w-2xl mx-auto z-10">
          {/* Small heading */}
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Innovate
          </p>

          {/* Main title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight dark:text-white">
            Choose the Perfect Plan for Your AI Journey
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            From Starter Tools to Enterprise Solutions, We have Got You Covered.
          </p>

          {/* Toggle buttons (Monthly / Yearly) */}
          <div className="flex gap-3 justify-center items-center mt-5">
            <button className="dark:bg-[#8726DC] dark:text-white cursor-pointer bg-[#02D9C0] text-black rounded-md hover:bg-[#02D9C9] dark:hover:bg-[#8726DC] px-6 py-2 text-sm">
              Monthly
            </button>
            <button className="dark:bg-[#5F5E61] dark:hover:bg-[#5F5E61] dark:text-white cursor-pointer bg-[#D9D4DD] hover:bg-[#D9D4DD] text-black rounded-md px-6 py-2 text-sm">
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* ----------------- PRICING CARDS ----------------- */}
      <div className="relative px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6 mt-24 z-10">
          
          {/* -------- FREE PLAN -------- */}
          <div className="relative">
            <div className="dark:bg-[#37425a] dark:shadow-[0_10px_50px_rgba(135,38,220,0.6)] bg-white h-full min-h-[400px] max-h-[420px] shadow-[0_0_30px_rgba(2,217,192,0.4)] rounded-tl-[20px] rounded-tr-[200px] pt-8 pb-6 px-6 rounded-bl-[20px] rounded-br-[20px] flex flex-col">
              
              {/* Background images (light/dark) */}
              <div className="absolute z-30 h-[480px] w-[380px] left-[320px] -translate-x-1/2 -top-[300px]">
                <img
                  className="object-contain dark:hidden absolute h-full w-full object-bottom top-0 bottom-0 left-0 right-0"
                  src="/pics/Bg2.webp"
                  alt="Plan background light"
                />
                <img
                  className="object-contain object-bottom absolute hidden dark:block h-full w-full top-0 bottom-0 left-0 right-0"
                  src="/pics/Bg3.webp"
                  alt="Plan background dark"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-[#8726DC] dark:text-[#02D9C0] text-xl font-semibold mb-4">
                  Free Plan
                </p>
                <h1 className="text-3xl font-bold text-black mb-6 dark:text-white">
                  $0.00/month
                </h1>
                <p className="font-semibold text-lg mb-4 dark:text-white">
                  Features
                </p>

                {/* Features list */}
                <div className="space-y-4 text-black mb-8 dark:text-white">
                  <p className="flex items-start"><span className="mr-2">•</span> Basic AI tools and limited functionality</p>
                  <p className="flex items-start"><span className="mr-2">•</span> Access to pre-made templates</p>
                  <p className="flex items-start"><span className="mr-2">•</span> Up to 3 projects per month</p>
                </div>
              </div>

              {/* Button */}
              <div className="w-full">
                <button className="shadow-xs cursor-pointer px-4 w-full py-3 text-sm dark:bg-[#5F5E61] dark:text-white dark:hover:bg-[#4f4e50] bg-[#D9D4DD] text-black hover:bg-[#c9c4cd] rounded-md transition-colors duration-300">
                  Get started
                </button>
              </div>
            </div>
          </div>

          {/* -------- PREMIUM PLAN -------- */}
          <div className="relative pb-2 -mt-16">
            <div className="dark:bg-[#37425a] dark:shadow-[0_10px_50px_rgba(135,38,220,0.6)] bg-white h-full min-h-[400px] max-h-[420px] shadow-[0_0_30px_rgba(2,217,192,0.4)] rounded-tl-[20px] rounded-tr-[200px] pt-8 pb-6 px-6 rounded-bl-[20px] rounded-br-[20px] flex flex-col">
              
              <div className="relative z-10">
                <p className="text-[#8726DC] dark:text-[#02D9C0] text-xl font-semibold mb-4">
                  Premium Plan
                </p>
                <h1 className="text-3xl font-bold text-black mb-6 dark:text-white">
                  $29.99/month
                </h1>
                <p className="font-semibold text-lg mb-4 dark:text-white">Features</p>

                <div className="space-y-4 text-black mb-8 dark:text-white">
                  <p className="flex items-start"><span className="mr-2">•</span> Full access to all AI tools</p>
                  <p className="flex items-start"><span className="mr-2">•</span> Customizable templates and advanced designs</p>
                  <p className="flex items-start"><span className="mr-2">•</span> Unlimited projects</p>
                </div>
              </div>

              {/* Button */}
              <div className="w-full">
                <button className="dark:bg-[#8726DC] dark:text-white dark:hover:bg-[#7a1fd6] shadow-xs cursor-pointer px-4 w-full py-3 text-sm bg-[#02D9C0] text-white hover:bg-[#02c9b0] rounded-md transition-colors duration-300">
                  Get started
                </button>
              </div>
            </div>
          </div>

          {/* -------- ULTRA PLAN -------- */}
          <div className="relative">
            <div className="dark:bg-[#37425a] dark:shadow-[0_10px_50px_rgba(135,38,220,0.6)] bg-white h-full min-h-[400px] max-h-[420px] shadow-[0_0_30px_rgba(2,217,192,0.4)] rounded-tl-[20px] rounded-tr-[200px] pt-8 pb-6 px-6 rounded-bl-[20px] rounded-br-[20px] flex flex-col">
              
              <div className="relative z-10">
                <p className="text-[#8726DC] dark:text-[#02D9C0] text-xl font-semibold mb-4">
                  Ultra Plan
                </p>
                <h1 className="text-3xl font-bold text-black mb-6 dark:text-white">
                  $99.99/month
                </h1>
                <p className="font-semibold text-lg mb-4 dark:text-white">Features</p>

                <div className="space-y-4 text-black mb-8 dark:text-white">
                  <p className="flex items-start"><span className="mr-2">•</span> Everything in Premium, plus</p>
                  <p className="flex items-start"><span className="mr-2">•</span> Dedicated account manager</p>
                  <p className="flex items-start"><span className="mr-2">•</span> Team collaboration tools</p>
                </div>
              </div>

              {/* Button */}
              <div className="w-full">
                <button className="dark:bg-[#5F5E61] dark:text-white dark:hover:bg-[#4f4e50] shadow-xs px-4 w-full py-3 cursor-pointer text-sm bg-[#D9D4DD] text-black hover:bg-[#c9c4cd] rounded-md transition-colors duration-300">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- BOTTOM IMAGE STRIP ----------------- */}
      <div className="w-full mt-20 overflow-hidden max-h-[450px] dark:bg-[#14213D]">
        {/* Light mode image */}
        <img
          className="w-full h-auto dark:hidden object-cover object-top"
          src="/pics/style.webp"
          alt="Background style light"
        />
        {/* Dark mode image */}
        <img
          className="hidden dark:block w-full h-auto object-cover object-top"
          src="/pics/style1.webp"
          alt="Background style dark"
        />
      </div>
    </div>
  )
}

export default Middle2
