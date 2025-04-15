import React from "react";
import Image from "next/image";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center mb-20">
      <h1 className="text-white text-center sm:text-5xl text-4xl p-4 m-6 font-semibold">
        Let&apos;s get in touch
      </h1>
      <div className="flex gap-4 p-8 mx-4 mb-8 justify-center items-center">
        {socialMedia.map((item) => (
          <a className="z-10" key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="bg-black-200 w-14 h-14 rounded-full border-2 border-black-300 cursor-pointer flex justify-center items-center">
              <Image src={item.img} alt={item.id} width={20} height={20} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
