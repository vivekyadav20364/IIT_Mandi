import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[150px]">
      <div className="max-h-[495px] max-w-[586px]">
        <img
          className=" size-[85%] object-contain md:size-full"
          src="/logo.jpg"
          alt="About"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          About IIT Mandi iHub and HCI Foundation

        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
           Research & Development
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
        IIT Mandi iHub and HCi Foundation is a Technology Innovation Hub (TIH). It is focused on Human-Computer Interaction (HCi). The Hub was incorporated on 24th  September 2020. It is set up by the Indian Institute of Technology (IIT) Mandi under India’s National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS). The iHub is planned to make India a leader in human-computer interaction (HCi) research in the world
        </p>
        
      </div>
    </div>
  );
}
