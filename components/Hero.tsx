import React from "react";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import ShimmerButton from "./ui/ShimmerButton";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      <div className="relative z-10">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
      </div>
      <div className="relative z-20 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="text-white text-center text-[40px] md:text-5xl lg:text-6xl font-semibold">
            Turning Visionary Ideas into
            <span className="text-purple"> Effortless Experiences</span>
          </h1>

          <p className="mt-4 text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Anurag Singh, a FullStack Web Developer
          </p>
          <div className="mt-4 flex gap-6">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nd5jbd1WtksGqnCOjVL1coCigqzAXg_5/view"
            >
              <MagicButton />
            </a>
            <a href="https://drive.usercontent.google.com/uc?id=1nd5jbd1WtksGqnCOjVL1coCigqzAXg_5&export=download">
              <ShimmerButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
