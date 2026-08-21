"use client";
import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/env";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
        max-w-7xl px-5 md:px-10 justify-start pt-20 md:pt-24 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl flex-shrink-0">
        About
      </h3>
      <div className="flex flex-col md:flex-row items-center w-full mt-6 md:mt-16 space-y-4 md:space-y-0">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="flex-shrink-0 w-44 h-44 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-4 md:space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-base overflow-y-auto max-h-[30vh] md:max-h-full scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
