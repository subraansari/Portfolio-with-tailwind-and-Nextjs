"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Mobile nav visibility state
  const [navVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  // Hide nav when link is clicked
  const hideNav = () => {
    setNavVisible(false);
  };

  // Navbar visibility on scroll state
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex justify-between fixed z-[5000] inset-x-0 px-10 py-3 border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
       {!navVisible && (<div className="font-bold md:text-2xl text-xl ">Subra<span className="text-purple">Ansari</span></div>)
       }

        
        {/* Desktop Nav Items (hidden on mobile) */}

        <div className="hidden sm:flex space-x-16">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-purple hover:text-neutral-500"
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

         {/* Hamburger Icon for Mobile (only visible when nav is not open) */}
        {!navVisible && (
          <div onClick={toggleNav} className="sm:hidden cursor-pointer pt-1">
            <GiHamburgerMenu color="white" size={20}/>
          </div>
        )}

         {/* Mobile Nav Items */}
        {navVisible && (
          <div className="h-full flex justify-between sm:hidden w-full max-w-lg min-w-">
            
            {/* Nav Items */}
            <div className="flex flex-col space-y-8 mt-8">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  onClick={hideNav}
                  className={cn(
                    "dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-start"
                  )}
                >
                  <span className="text-sm !cursor-pointer">{navItem.name}</span>
                </Link>
              ))}
            </div>

            {/* Cross Icon at the Top Right */}
            <div className="mb-4">
              <IoMdClose color="white" size={24} onClick={toggleNav} className="cursor-pointer" />
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
