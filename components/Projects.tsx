"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/data";

export function Projects() {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading text-white">Projects</h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div key={item.id}>
            <CardContainer className="inter-var rounded-xl">
              <CardBody className="bg-black-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <a href={item.link} target="_blank">
                      <p className="text-xl text-blue-300 font-semibold">
                        {item.live && item.live}
                      </p>
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <div className="flex items-center gap-2">
                      {item.iconLists.map((icon) => (
                        <div
                          key={icon}
                          className="rounded-full bg-black-100 lg:w-12 lg:h-12 w-8 h-8 flex justify-center items-center"
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
