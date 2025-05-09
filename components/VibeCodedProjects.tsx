import React from 'react'
import Image from "next/image";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { vibe_coded_projects } from "@/data"

const VibeCodedProjects = () => {
  return (
    <div className='py-20'>
        <h1 className="heading text-white">Vibe Coded Projects</h1>
        <div>
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      {vibe_coded_projects.map((item) => (
        <DraggableCardBody key={item.id} className={item.className}>
          <h3 className="text-xl font-bold text-white dark:text-white">
            {item.title}
          </h3>
          <div className="text-white text-sm max-w-sm mt-2 mb-4 dark:text-neutral-300">
            {item.des}
          </div>
          <Image
            src={item.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            />
            <div className='mt-10'>
              <a href={item.link} target="_blank">
                <p className="text-xl text-blue-300 font-semibold">
                  {item.live && item.live}
                </p>
              </a>
            </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
        </div>
    </div>
  )
}

export default VibeCodedProjects