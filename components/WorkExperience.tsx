"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-dvh flex relative overflow-hidden flex-col text-left
      max-w-full px-5 md:px-10 justify-start pt-20 md:pt-24 mx-auto items-center z-0"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl flex-shrink-0 text-center pl-[20px]">
        Experience
      </h3>

      <div
        className="relative w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
        z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-12 md:mt-20
        px-[7.5vw] sm:px-[calc(50vw_-_250px)] md:px-[calc(50vw_-_300px)] xl:px-[calc(50vw_-_450px)]"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
