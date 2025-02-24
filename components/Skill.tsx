import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/sanity/env";
type Props = {
  skill: SkillType;
  directionLeft?: boolean; // if true, skill will be on the left side
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      animate={{
        x: directionLeft ? 20 : -20,
      }}
      transition={{
        type: "spring", // 使用 spring 类型的动画
        stiffness: 60, // 控制弹性，值越大，越快停止
        damping: 20, // 控制阻尼，值越大，越少弹性
        mass: 1, // 控制质量，越大则动画越慢
        duration: 1, // 动画持续时间
      }}
      whileInView={{ opacity: 1, x: 0 }}
      layout
      className="group relative flex cursor-pointer w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 "
    >
      <img
        alt=""
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out justify-center items-center w-20 h-20 md:w-24 md:h-24 xl:w-24 xl:h-24"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white justify-center items-center w-20 h-20 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-2xl font-bold text-black opacity-100">
            <h4 className="text-sm">{skill.title}</h4>
            <h4>{skill.progress}%</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
