"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import { techStack } from "@/data";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

export function Grid() {
  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Aspiring MERN Developer
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
            While my experience may be limited, my determination to expand my skill set and tackle new
            concepts drives me to excel in the dynamic field of web development.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
        <h2 className="max-w-80  text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Tech Enthusiast
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Tech enthusiast with a keen interest in web development. Excited to
          learn and contribute to innovative projects.
        </p>
      </WobbleCard>
      <div className="absolute inset-0 z-0">
      </div>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black-300 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <BackgroundBeamsWithCollision className="absolute">
          <></>
        </BackgroundBeamsWithCollision>
        <div className="w-full flex item-center justify-center text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
          Tech Stack
        </div>
        <div className="w-[80vw] flex items-center justify-center">
          <div className="mt-[30px] p-4">
            <div className="flex flex-wrap gap-10 justify-center items-center">
              {techStack.map((item) => (
                <div key={item.title} className="flex flex-col justify-center items-center">
                  <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
                    <Image
                      width={40}
                      height={40}
                      src={`/${item.img}`}
                      alt={item.title}
                    />
                  </div>
                  <p className="pt-2 text-white font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
