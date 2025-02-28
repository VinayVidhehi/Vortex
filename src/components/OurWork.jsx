"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurWork = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%", // Trigger when 80% of the element is in view
        end: "top 30%", // Optional, control when the animation should end
        scrub: true, // This makes the animation smooth and controlled as you scroll
        once: true, // Animation will trigger only once when entering the viewport
      },
    });
  }, []);
  return (
    <div className="flex items-center justify-center  bg-background py-10 md:py-0">
      <div className="flex flex-col gap-12 items-center w-11/12 md:w-10/12">
        <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
          <div className="w-full md:w-1/6">
            <p className="text-muted-foreground">/ Our Work /</p>
          </div>
          <div className="w-full md:w-5/6 flex flex-col gap-6 justify-between">
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl font-medium" ref={titleRef}>
                Explore our Work
              </h3>
            </div>
            <div className="w-full flex flex-wrap gap-10 md:gap-0 justify-between">
              {/* Your Work here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
