import { socialMedia } from "@/data";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center mb-20">
      <h1 className="text-white text-center sm:text-5xl text-4xl p-4 m-6 font-semibold">
        Let&apos;s get in touch
      </h1>
      <div className="flex gap-4 p-8 mx-4 mb-8 justify-center items-center">
        {socialMedia.map((item) => (
          <a key={item.id} href={item.link} target="_blank">
            <div className="bg-black-200 w-14 h-14 rounded-full border-2 border-black-300 cursor-pointer flex justify-center items-center">
              <img width={20} height={20} src={item.img} alt={item.img} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
