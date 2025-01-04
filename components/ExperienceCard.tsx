import { motion } from "framer-motion";
import React from "react";
import XiaomiImg from "../public/img/Xiaomi.png";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[140px] xl:h-[140px] object-cover 
        object-center"
        src={XiaomiImg.src}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">STAFF of XIAOMI</h4>
        <p className="font-bold text-2xl mt-1">XIAOMI</p>
        <div className="flex space-x-2 my-2">
          {/*Java*/}
          <img
            className="h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png?size=48"
            alt=""
          />
          {/* JS */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://code.visualstudio.com/assets/home/language-js.png"
            alt=""
          />
          {/* TS */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://code.visualstudio.com/assets/home/language-ts.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        {/* 固定高度 */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
