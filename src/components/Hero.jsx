import React from 'react'

function Hero() {

    return (
        <>
            <div className="main absolute bg-white  flex items-center justify-center h-full w-full overflow-hidden dark:bg-[#14213D]/70 ">
                <img className='absolute inset-0  h-[100%] w-[100%] text-transparent  top-0 left-0 right-0 bottom-0' src="public\pics\BG.webp" alt="pic" srcset="" />
                <div className='absolute h-180 inset-0 bg-white/20 dark:bg-[#14213D]/70 backdrop-blur-lg z-1 '></div>
                <div className=' relative top-10  h-138 w-full flex items-center justify-center gap-85  z-2 '>
                    <div className="left px-[75px] py-[35px] h-90 w-150 flex flex-col gap-4  items-baseline ">
                        <h1 className='font-bold text-[35px] dark:text-white '>Revolutionizing Your  World with AI Solutions</h1>
                        <p className='text-gray-700  text-[15px] dark:text-gray-400 '>Discover the future of technology with our AI-powered platform designed to enhance your everyday experiences.</p>
                        <div className='flex gap-4'>
                            <button className='cursor-pointer dark:bg-[#8726DC] dark:hover:bg-[#6a1eb0] text-white bg-[#02D9C0] px-5 py-[6px] rounded-[6px] hover:bg-black '>Get Started</button>
                            <button className='text-black dark:border-white dark:text-white dark:hover:bg-white/10 cursor-pointer border-[1px] border-black  px-5 py-[6px] rounded-[6px] hover:bg-white '>Learn More</button>
                        </div>
                    </div>
                    <div className="right  h-[480px] w-[400px] ">
                        <div className=' w-[400px] h-[440px]   '>
                            <img className='dark:hidden object-cover h-full w-full top-0 bottom-0 left-0 right-0 text-transparent ' src="public\pics\Bg2.webp" alt="" />
                            <img className='hidden object-cover dark:block h-full w-full top-0 bottom-0 left-0 right-0 text-transparent ' src="public\pics\Bg3.webp" alt="" />
                        </div>
                        <div className='absolute animate-[bounce 4s ease-in-out infinite] h-[1000px] w-[1000px] left-[500px] top-[-240px] '>
                            <img className='object-contain drop-shadow-lg h-full w-full top-0 bottom-0 right-0 left-0 text-transparent ' src="public\pics\robo.webp" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
