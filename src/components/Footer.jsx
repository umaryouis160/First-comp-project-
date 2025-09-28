import React from 'react'

const Footer = () => {
  return (
    <footer className="relative top-[1140px] w-full overflow-hidden dark:bg-[#14213D]">
      {/* --------- BACKGROUND LAYERS --------- */}
      {/* Light theme gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4CC9F0] to-[#02D9C0] dark:hidden z-0"></div>

      {/* Dark theme glass effect */}
      <div className="absolute inset-0 hidden dark:block shadow-[0_4px_30px_rgba(0,0,0,0.9)] bg-[#ffffff21] backdrop-blur-[18px] z-0"></div>

      {/* Dark theme blurred circles (decoration) */}
      <div className="absolute right-[-50px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-[#8726DC] opacity-30 blur-3xl pointer-events-none z-10 hidden dark:sm:block"></div>
      <div className="absolute left-[-50px] bottom-[-100px] w-[300px] h-[300px] rounded-full bg-[#8726DC] opacity-30 blur-3xl pointer-events-none z-10 hidden dark:sm:block"></div>

      {/* --------- CONTENT --------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-black dark:text-white">
        <div className="grid grid-cols-5 gap-8">
          {/* Column 1 - Buy */}
          <div>
            <h3 className="text-md font-bold mb-4 uppercase">Buy</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="cursor-pointer">Registration</li>
              <li className="cursor-pointer">Neural crafts</li>
              <li className="cursor-pointer">Bidding & Buying Help</li>
              <li className="cursor-pointer">Stores</li>
            </ul>
          </div>

          {/* Column 2 - Learn */}
          <div>
            <h3 className="text-md font-bold mb-4 uppercase">Learn</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="cursor-pointer">Start learning</li>
              <li className="cursor-pointer">Affiliates</li>
              <li className="cursor-pointer">Tools & apps</li>
              <li className="cursor-pointer">Developer</li>
            </ul>
          </div>

          {/* Column 3 - Stay Connected */}
          <div>
            <h3 className="text-md font-bold mb-4 uppercase">Stay connected</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="cursor-pointer">Neuralcraft blog</li>
              <li className="cursor-pointer">Facebook</li>
            </ul>
          </div>

          {/* Column 4 - About */}
          <div>
            <h3 className="text-md font-bold mb-4 uppercase">About Neuralcrafts</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="cursor-pointer">Company info</li>
              <li className="cursor-pointer">News</li>
              <li className="cursor-pointer">Investor</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Policies</li>
            </ul>
          </div>

          {/* Column 5 - Help */}
          <div>
            <h3 className="text-md font-bold mb-4 uppercase">Help & Contact</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="cursor-pointer">Seller Information Centre</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Community</li>
              <li className="cursor-pointer">Announcement</li>
              <li className="cursor-pointer">Discussion Boards</li>
              <li className="cursor-pointer">Neural crafts Giving Works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
