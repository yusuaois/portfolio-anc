import { motion } from "framer-motion";
import React from "react";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity/env";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-2 md:space-y-4 flex-shrink-0
    w-[85vw] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 
     max-h-[80dvh] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[140px] xl:h-[140px] object-cover
        object-center flex-shrink-0"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10 w-full">
        <h4 className="text-2xl md:text-4xl font-light text-center md:text-left">
          {experience.jobTitle} of {experience.company}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1 text-center md:text-left">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2 justify-center md:justify-start">
          {experience.technologies?.map((technology) => (
            <img
              alt=""
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300 text-center md:text-left text-sm md:text-base">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul
          className="list-disc space-y-4 ml-5 text-sm md:text-lg overflow-y-auto max-h-60
        pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        >
          {experience.points?.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
