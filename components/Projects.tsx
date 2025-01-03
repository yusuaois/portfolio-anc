import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 "
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-20 md:p-44 h-screen"
          >
            {/* Project Img */}
            <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                {/* Project Title */}
                UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                {/* Project Summary English*/}
                The Uber Clone project is a ride-sharing application that mimics
                the core functionality of Uber. The platform connects riders
                with nearby drivers, enabling users to request rides, track
                their journey, and make payments seamlessly through a mobile or
                web interface. The app aims to provide an intuitive, real-time
                transportation solution with features such as GPS-based
                tracking, fare estimation, ride history, and secure payment
                integration.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
