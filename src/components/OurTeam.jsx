"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="w-full md:w-[32%] flex flex-col gap-2 team-member">
      <Image
        width={2000}
        height={2000}
        src={imageSrc}
        alt={name}
        className="w-full h-96 object-cover"
      />
      <div className="flex items-center justify-between font-light text-sm">
        <h3>{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const titleRef = useRef(null);
  const teamMembers = [
    {
      name: "Adharsh Rangappa",
      role: "CEO, Founder",
      imageSrc: "/images/perosn1.jpg",
    },
    {
      name: "Vinay V",
      role: "Lead UI/UX Designer",
      imageSrc: "/images/perosn2.jpg",
    },
    {
      name: "Swathi Pandey",
      role: "Content Creation Strategist",
      imageSrc: "/images/perosn3.jpg",
    },
    {
      name: "Priyesh Pandey",
      role: "AI Automation Strategist",
      imageSrc: "/images/perosn1.jpg",
    },
    {
      name: "Bhisaj R",
      role: "Event CO Ordinator",
      imageSrc: "/images/perosn2.jpg",
    },
  ];

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Animate the title when it enters the viewport with a dynamic effect
  //   gsap.from(titleRef.current, {
  //     opacity: 0,
  //     y: 50, // Title moves up a little as it fades in
  //     duration: 1.2,
  //     ease: "power4.out", // Smoother ease for a more dynamic effect
  //     scrollTrigger: {
  //       trigger: titleRef.current,
  //       start: "top 80%", // Trigger when 80% of the element is in view
  //       end: "top 30%",
  //       scrub: true,
  //       once: true, // Trigger only once when entering the viewport
  //     },
  //   });

  //   // Animate each team member card: fade in and slide up with staggered timing
  //   gsap.fromTo(
  //     ".team-member",
  //     {
  //       opacity: 0,
  //       y: 50, // Start below and fade in
  //     },
  //     {
  //       opacity: 1,
  //       y: 0, // Slide up to the normal position
  //       duration: 1.2,
  //       ease: "power3.out",
  //       stagger: 0.3, // Staggered delay between animations
  //       scrollTrigger: {
  //         trigger: ".team-member",
  //         start: "top 90%", // Start animation when 90% of the card is visible
  //         end: "bottom 80%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background py-28">
      <div className="flex flex-col gap-12 items-center w-11/12 md:w-10/12">
        <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
          <div className="w-full md:w-1/6">
            <p className="text-muted-foreground">/ Company /</p>
          </div>
          <div className="w-full md:w-5/6 flex flex-col gap-6 justify-between">
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl font-medium">Meet our passionate team</h3>
            </div>
            <div className="w-full flex flex-wrap gap-10 md:gap-0 justify-between">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
