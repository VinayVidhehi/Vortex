import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-10 md:py-20 bg-zinc-950">
      <div className="flex flex-col w-11/12 md:w-10/12 gap-12">
        <div className="flex flex-col gap-4 md:gap-0 md:items-center md:flex-row">
          <div className="w-1/2 flex gap-3">
            <img
              src="/icons/vortex-white.svg"
              alt=""
              className="w-10 md:w-16"
            />
            <h2 className="font-bold text-4xl md:text-6xl">VORTEX</h2>
          </div>
          <div className="text-base md:text-lg tracking-wide flex flex-col md:flex-row md:items-center gap-1.5">
            <h3>“ QUIT LOSING, ACT WISELY ”.</h3>
            <p>LET VORTEX DO THE WORK.</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12 justify-between">
          <div className="w-full flex flex-col md:flex-row gap-12">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-gray-500 font-normal uppercase">
                Contact US
              </h3>
              <div className="flex flex-col gap-1.5 tracking-wide">
                <Link href="" className="font-light">
                  vortexprivatelimited@gmail.com
                </Link>
                <Link href="" className="font-light">
                  91+ 7411571999
                </Link>
                <p className="text-xs text-muted-foreground leading-5">
                  ADDRESS : 4th FLOOR, NO 7,8 SY NO 23, T DASARAHALLI, OPP.
                  METRO STATION, BANGALORE - 560057,
                </p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h3 className="text-gray-500 font-normal uppercase">Navigate</h3>
              <div className="flex flex-col gap-1.5 tracking-wide">
                <Link href="" className="font-light">
                  Work
                </Link>
                <Link href="" className="font-light">
                  Services
                </Link>
                <Link href="" className="font-light">
                  Company
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h3 className="text-gray-500 font-normal uppercase">Follow US</h3>
              <div className="flex flex-col gap-1.5 tracking-wide">
                <Link href="" className="font-light">
                  Instagram
                </Link>
                <Link href="" className="font-light">
                  LinkedIn
                </Link>
                <Link href="" className="font-light">
                  Github
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row md:items-center justify-between">
            <p className="text-xs tracking-wide capitalize">
              ALL RIGHTS RESERVED. ALL WRONGS RESTORED.
            </p>
            <div className="md:w-1/2 flex items-center gap-12 md:justify-start justify-between text-xs tracking-wide">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <Link href={"/terms-conditions"}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
