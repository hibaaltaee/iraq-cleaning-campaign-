"use client";
import Link from "next/link";
import React from "react";
import { PiHandHeartLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import { Typography } from "../material-tailwind";
import { Tajawal } from "next/font/google";
import { useTranslation } from "react-i18next";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export default function join() {
  const { t, i18n } = useTranslation();

  return (
    <div className="overflow-hidden mx-auto my-0 flex justify-center items-center flex-col bg-[#F6FFFA] dark:bg-black">
      <div className="bg-[#82B092] pt-[8rem] md:pt-[6rem] w-full h-[40vh]">
        <div className="w-full flex justify-center px-[1rem]">
          <div
            className="max-w-[800px] mt-[2rem] pt-[4rem]"
            dir={i18n.language === "en" ? "rtl" : "ltr"}
          >
            <Typography
              className={`text-white font-[600] text-center md:text-end text-xl md:text-2xl lg:text-3xl mb-4 ${tajawal.className}`}
            >
              {t("join page-hero")}
            </Typography>
            <Typography
              className={`text-white font-[400] text-center md:text-end text-sm md:text-md lg:text-xl ${tajawal.className}`}
            >
              {t("join page-p")}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-[2rem] pb-[8rem] pt-[4rem]">
        <div>
          <Typography
            variant="h4"
            className={`join mb-[2rem] ${tajawal.className}`}
          >
            {t("how-join")}
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          <div className="cardContainer bg-[#FFFFFF] shadow-md mb-4 rounded-[6px] dark:bg-gray-900">
            <div className="card mx-6 my-8 flex text-center flex-col">
              <div className="iconContainer px-8">
                <div className="icon p-4 flex justify-center items-center rounded-full bg-[#508161]">
                  <PiHandHeartLight className="text-[#F1FAF0] text-[4rem]" />
                </div>
              </div>

              <div className="body">
                <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] mt-[.1rem] mb-[1.3rem]">
                  {t("donor")}
                </h1>
              </div>

              <div className="btn">
                <Link href={"/join/donor"}>
                  <button className="rounded-[6px] normal-case bg-[#E3AB5D] w-full py-[.5rem] text-[#000] hover:bg-opacity-90 transition">
                    {t("join")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="cardContainer bg-[#FFFFFF] shadow-md mb-4 rounded-[6px] dark:bg-gray-900">
            <div className="card mx-6 my-8 flex text-center flex-col">
              <div className="iconContainer px-8">
                <div className="icon p-4 rounded-full bg-[#508161]">
                  <PiHandshakeLight className="text-[#F1FAF0] text-[4rem]" />
                </div>
              </div>

              <div className="body">
                <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] mt-[.1rem] mb-[1.3rem]">
                  {t("volunteer")}
                </h1>
              </div>

              <div className="btn">
                <Link href={"/join/volunteer"}>
                  <button className="rounded-[6px] normal-case bg-[#E3AB5D] w-full py-[.5rem] text-[#000] hover:bg-opacity-90 transition">
                    {t("join")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
