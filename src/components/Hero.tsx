import React, { useEffect } from "react";
import { Spotlight } from './ui/Spotlight';
import Typed from "typed.js";
import Image from 'next/image';
import model from "../../public/homeModel.jpg";
import Link from 'next/link';

const Hero = () => {

  useEffect(() => {
    // Initialize the typing effect
    const options = {
      strings: ["Frontend Web Developer", "React.js Enthusiast", "TypeScript Expert", "UI/UX Designer"], // Words to type
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 60, // Backspacing speed in milliseconds
      loop: true, // Whether to loop through the words
    };

    // Create Typed instance
    const typed = new Typed(".typing", options);

    // Cleanup function to destroy Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

  return (
    <div className='py-20'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className='flex flex-col md:flex-row justify-between text-center relative'>
        <div className=' text-center md:text-left'>
          <h2 className='md:pt-32 text-center md:text-left uppercase tracking-widest md:text-xs text-[10px] text-blue-100'>
            Dynamic Web Experiences with Next.js
          </h2>
          <h1 className=' text-center md:text-left mt-4 font-bold text-[28px] md:text-4xl lg:text-5xl'>
            Hey, I&apos;m <span className='text-purple'>Subra Ansari</span>
          </h1>
          <h2 className='text-center md:text-left font-semibold text-[26px] md:text-4xl lg:text-5xl md:my-5 my-1'>
            <span>A </span>
            <span className="typing"></span>
          </h2>
          <p className='text-blue-100 text-center md:text-left md:tracking-wider mb-1 text-sm lg:text-sm md:max-w-[80%] '>
            Turning visions into interactive digital realities, I build responsive, high-performance web applications with Next.js. My focus is on delivering seamless, user-centric designs that enhance engagement and functionality. Blending creativity with technical precision, I ensure each project is both visually appealing and efficient. I’m passionate about transforming ideas into impactful digital experiences.
          </p>

          <div className="flex md:justify-start justify-center items-center">
           

            <Link href="Subra's CV.pdf" download="Subra's CV.pdf">
              <button className="bg-[#9677c0] text-sm md:w-56 w-[150px] md:ml-8 ml-3 mt-10 h-14 rounded-lg text-white transition whitespace-nowrap">
                Download CV
              </button>
            </Link>
          </div>


        </div>
        <div>
          <Image src={model} alt='image' width={1500} className='pt-10'></Image>
        </div>
      </div>
    </div>
  )
}

export default Hero