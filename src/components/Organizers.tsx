import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "../app/material-tailwind";
import AnimateOnView from "./AnimateOnView";
import Marquee from "react-fast-marquee";
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

export default function Organizers({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState<Image | null>(null);
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

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  const handleImageClick = (id: number, imgUrl: string) => {
    setSelectedItem({ id, imgUrl });
  };

  return (
    <div className="subs my-[8rem]">
      <AnimateOnView>
        <div className="container mx-auto ">
          <Typography
            variant="h3"
            color="dark"
            className={`text-center ${tajawal.className}`}
          >
            {t("organizers")}
          </Typography>
          <Marquee
            pauseOnHover={true}
            autoFill={true}
            loop={0}
            gradient={true}
            gradientColor={[255, 255, 255]}
            className="organizersList flex justify-evenly w-full py-4 items-center overflow-hidden"
          >
            {orgzData.map((organizer) => (
              <div
                onClick={handleOpen}
                key={organizer.id}
                className="or1 md:mx-[6rem] mx-[2rem]"
              >
                <div
                  onClick={() =>
                    handleImageClick(organizer.id, organizer.imgUrl)
                  }
                  className="imgContainer h-[6rem] md:h-[6rem] min-w-[120px] min-h-[120px] md:min-w-[170px] md:min-h-[170px] w-full"
                >
                  <div className="w-full h-full rounded-full overflow-hidden hover:scale-110 cursor-pointer transition">
                    <div
                      className={`w-full transition rounded-md h-full bg-cover bg-top`}
                    >
                      <img
                        className="w-full h-full object-contain "
                        src={`/assets/Organizers/${organizer.imgUrl}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </AnimateOnView>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="flex flex-row overflow-hidden relative"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <DialogBody divider={true} className="p-0">
          <img
            className="h-[30rem] w-full object-cover object-center "
            src={`/assets/Organizers/${selectedItem?.imgUrl}`}
            alt=""
          />
        </DialogBody>

        <div>
          <DialogHeader className="flex-col items-start">
            <div className="flex flex-col gap-3 pt-4">
              <div className="-mt-px flex flex-col">
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
                className={`font-light my-8 pt-8 ${tajawal.className}`}
              >
                {t("lorem")}
              </Typography>
            </div>
          </DialogHeader>

          <DialogFooter
            className={`justify-between absolute bottom-0 ${
              i18n.language === "en" ? "right-0" : "left-0"
            }`}
          >
            <div className="flex items-center gap-16 mx-4">
              <div>
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
                  className="opacity-80 transition-opacity hover:opacity-100 my-4 hover:text-pink-400"
                >
                  {instagramIcon}
                </Typography>
              </div>
            </div>
          </DialogFooter>
        </div>
      </Dialog>
    </div>
  );
}
