import React from "react";
import { Typography } from "../app/material-tailwind";
import LinkButton from "./LinkButton";
import AnimateOnView from "./AnimateOnView";
import { useTranslation } from "react-i18next";

type Props = {
  dir: "rtl" | "ltr";
};

export default function HomePostCard({ dir }: Props) {
  const { t, i18n } = useTranslation();
  return (
    <AnimateOnView>
      <div
        className="post grid grid-cols-1 lg:grid-cols-2 lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]  dark:text-white"
        dir={dir}
      >
        <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
          <div
            className={`w-full h-full py-[2rem] ${
              dir === "rtl" ? "pl-0 lg:pl-[4rem]" : "pr-0 lg:pr-[4rem]"
            }`}
          >
            <div className="bg-[url('/assets/1.png')] w-full self-start shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
          </div>
        </div>

        <div
          className={`postContent flex justify-center items-start flex-col ${
            dir === "rtl" ? "pr-0 lg:pr-[4rem]" : "pl-0 lg:pl-[4rem]"
          }`}
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <Typography variant="h2" color="black" className="mb-2 text-center  dark:text-white">
            {t("home page post title")}
          </Typography>
          <p>{t("lorem")}</p>

          <LinkButton link="#">{t("read more")}</LinkButton>
        </div>
      </div>
    </AnimateOnView>
  );
}
