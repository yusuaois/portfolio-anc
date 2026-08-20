"use client";
import { urlFor } from "@/sanity/env";
import { Project } from "@/typings";
import { motion } from "framer-motion";

import React from "react";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80 mt-20"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3
          items-center justify-center px-5 py-10 sm:p-10 md:p-20"
          >
            {/* Project Img：固定 16:9 盒子 + object-contain，任意比例/方向的图都等比缩放进盒子，
                竖屏图居中、左右留白，不会把整页高度撑高 */}
            <div className="w-full max-w-[666px] aspect-video">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full h-full object-contain"
                src={urlFor(project?.image).width(666).url()}
                alt=""
              />
            </div>
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {/* Project Title */}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center flex-wrap">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-base md:text-lg text-center md:text-left">
                {/* Project Summary English*/}
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
