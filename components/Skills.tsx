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
      className="flex relative flex-col text-center md:text-left 
      xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center 
      xl:space-y-0 mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] 
      text-gray-500 text-2xl"
      >
        Skills
      </h3>

      <h3
        className="absolute top-36 uppercase tracking-[3px] 
      text-gray-500 text-sm"
      >
        Hover over a skill for current proficiency
      </h3>

      <div
        className="grid grid-cols-4 gap-5 md:grid-cols-5 lg:grid-cols-6 lg:gap-2 max-h-[550px] !mt-28
        overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 px-10"
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
