import React from "react";
import { Spotlight } from "./ui/SpotlightNew";
import { BackgroundLines } from "./ui/BackgroundLines";
import MagicButton from "./ui/MagicButton";
import ShimmerButton from "./ui/ShimmerButton";


const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      <div className="relative z-10">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h1></h1>
    </BackgroundLines>
      </div>
      <div className="relative z-20 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="text-white text-center text-[40px] md:text-5xl lg:text-6xl font-semibold">
            Turning Visionary Ideas into
            <span className="bg-gradient-to-r from-[#8b5cf6] to-pink-500 bg-clip-text text-transparent"> Effortless Experiences</span>
          </h1>

          <p className="mt-4 text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Anurag Singh, a FullStack Web Developer
          </p>
          <div className="mt-4 flex gap-6">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Mg90HolKVqlmL_1ySDY5ISZOV5JyAyj5/view"
            >
              <MagicButton />
            </a>
            <a href="https://drive.usercontent.google.com/uc?id=1Mg90HolKVqlmL_1ySDY5ISZOV5JyAyj5&export=download">
              <ShimmerButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
