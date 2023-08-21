"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { Tajawal } from "next/font/google";
import { useTranslation } from "react-i18next";
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });
type Props = {};

interface Image {
  id: number;
  imgUrl: string;
}

const facebookIcon = (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      className="icon"
      fill-rule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clip-rule="evenodd"
    />
  </svg>
);

const instagramIcon = (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      className="icon"
      fill-rule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clip-rule="evenodd"
    />
  </svg>
);

export default function about({}: Props) {
  const { t, i18n } = useTranslation();
  const orgzData: Image[] = [
    {
      id: 1,
      imgUrl: "murt.png",
    },
    {
      id: 2,
      imgUrl: "1.jpg",
    },
    {
      id: 3,
      imgUrl: "2.jpg",
    },
    {
      id: 4,
      imgUrl: "3.jpg",
    },
  ];

  return (
    <div className="aboutPage">
      <div
        className="aboutHero relative bg-[url(/assets/5.jpg)] w-full h-[60vh] bg-cover bg-bottom"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="to-bg-black-10 z-[1] absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/25" />

        <div className="heroContent pt-[10rem] text-center md:text-start z-[10] px-[2rem] md:max-w-[800px] md:pt-[15rem]">
          <Typography className="text-2xl md:text-3xl font-600 text-white">
            {t("about-hero")}
          </Typography>

          <Typography className="text-md md:text-xl text-white  ">
            {t("about-hero2")}
          </Typography>
        </div>
      </div>

      <div className="about mb-[8rem] container sm:mx-auto mt-[6rem] ml-0 ">
        <div
          dir={i18n.language === "en" ? "rtl" : "ltr"}
          className="post flex flex-col lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]"
        >
          <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
            <div
              className={`w-full h-full pl-0 ${
                i18n.language === "en" ? "pl-[12rem]" : "pr-[12rem]"
              } py-[2rem]`}
            >
              <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
            </div>
          </div>

          <div
            className={`aboutContent flex justify-center items-start flex-col ${
              i18n.language === "en" ? "pr-0 sm:pr-4" : "pl-0 sm:pl-4"
            }`}
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <h2 className="text-4xl font-semibold leading-[1.3] text-black mb-2  dark:text-white">
              {t("about-post content")}

            </h2>
            <p>{t("about-p")}</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <p>{t("about-list-1")}</p>
              </li>
              <li>
                <p>{t("about-list-2")}</p>
              </li>
              <li>
                <p>{t("about-list-3")}</p>
              </li>
            </ul>{" "}
            <br></br>
            <div
              className="aboutContent flex justify-center items-start flex-col pl-0 sm:pl-4"
              dir={i18n.language === "en" ? "ltr" : "rtl"}
            >
              <h2 className="text-4xl font-semibold leading-[1.3] text-black mb-2 text-center  dark:text-white">
                {t("about-message")}
              </h2>

              <p>{t("message-1")}</p>

              <p>
                <span className="font-bold text-[1.2rem]">
                  {t("next step")}
                </span>
                :<br></br>
                {t("about-p2")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="organizers container mx-auto mb-[8rem]  dark:text-white">
        <Typography
          variant="h2"
          color="dark"
          className={`text-center ${tajawal.className}`}
        >
          {t("organizers")}
        </Typography>
        <div className="list grid grid-cols-1 md:grid-cols-2 gap-x-10  ">
          {orgzData.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-md overflow-hidden shadow-md bg-white my-8 dark:bg-black"
              dir={i18n.language === "en" ? "ltr" : "rtl"}
            >
              <div className="imgContainer h-[23rem] w-full">
                <div className="img w-full h-full">
                  <img
                    src={`/assets/Organizers/${item.imgUrl}`}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className=" px-6 py-4  dark:text-white">
                <div className="flex flex-col gap-3 pt-4  dark:text-white">
                  <div className="-mt-px flex flex-col dark:text-white ">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className={`font-medium ${tajawal.className}`}
                    >
                      {t("organizer name")}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="gray"
                      className={`text-xs font-normal ${tajawal.className}`}
                    >
                      {t("organizer position")}
                    </Typography>
                  </div>
                </div>
                <div className="body">
                  <Typography
                    variant="small"
                    className={`font-light my-8 ${tajawal.className}`}
                  >
                    {t("lorem")}
                  </Typography>
                </div>
              </div>
              <div className="footer px-6">
                <div className="flex items-center">
                  <Typography
                    as="a"
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100 hover:text-light-blue-700"
                  >
                    {facebookIcon}
                  </Typography>
                  <Typography
                    as="a"
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100 my-4 mx-2 hover:text-pink-400"
                  >
                    {instagramIcon}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
