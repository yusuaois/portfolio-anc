"use client"; // 只在客户端渲染

import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "@/typings";
type Props = { pageInfo: PageInfo };

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject= ${formData.subject} &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left
    max-w-7xl px-5 md:px-10 justify-start pt-20 md:pt-24 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl flex-shrink-0">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 md:space-y-8 mt-6 md:mt-10 w-full">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>

        {/* Contact Ways */}
        <div className="space-y-4 md:space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo.address}</p>
          </div>
        </div>

        {/* Send Me */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            rows={1}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-8 md:py-5 md:px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
