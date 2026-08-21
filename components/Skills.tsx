"use client";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center
      max-w-[2000px] xl:px-10 h-dvh justify-start pt-20 md:pt-24
      mx-auto items-center overflow-hidden"
    >
      <div className="flex flex-col items-center space-y-2 flex-shrink-0">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl flex-shrink-0 text-center pl-[20px]">
          Skills
        </h3>

        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>

      <div
        className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-5 md:grid-cols-5 lg:grid-cols-6 lg:gap-2 
        max-h-[calc(100dvh-240px)] overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 
        scrollbar-thumb-[#F7AB0A]/80 px-5 md:px-10 mt-4 md:mt-24"
      >
        {skills
          ?.slice(0, skills.length / 2)
          .map((skill) => <Skill key={skill._id} skill={skill} />)}

        {skills
          ?.slice(skills.length / 2, skills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  );
}
