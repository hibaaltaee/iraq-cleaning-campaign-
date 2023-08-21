"use client";
import HomeCarousel from "../components/HomeCarousel";
import { Typography, Input, Button } from "./material-tailwind";
import { useState } from "react";
import MyGoogleMaps from "../components/MyGoogleMaps";
import { Marker } from "@react-google-maps/api";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import HomePostCard from "@/components/HomePostCard";
import LinkButton from "@/components/LinkButton";
import ImageGallery from "@/components/ImageGallery";
import FormField from "@/components/FormField";
import Stats from "@/components/Stats";
import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AnimateOnView from "../components/AnimateOnView";
import Organizers from "../components/Organizers";
import { useTranslation } from "react-i18next";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export default function Home() {
  const [markers, setMarkers] = useState([
    {
      lat: 33.296947,
      lng: 44.399979,
    },
    {
      lat: 30.534528,
      lng: 47.832244,
    },
    {
      lat: 30.461913,
      lng: 47.985047,
    },
    {
      lat: 30.546185,
      lng: 47.752038,
    },
  ]);

  const { t, i18n } = useTranslation();

  const handleMapClick = () => {
    console.log("clicked");
  };
  const handlePinClick = () => {
    console.log("clicked");
  };

  const schema = yup
    .object({
      email: yup
        .string()
        .email(t("error- please enter a correct email address"))
        .required(t("error- please enter a correct email address")),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data: any) => {
    console.log(data);

    reset();
  };

  return (
    <div className={tajawal.className}>
      <HomeCarousel />
      {/* About us */}
      <div className="container mx-auto px-4">
        {/* About us */}
        <AnimateOnView>
          <div
            className="aboutUs flex flex-col md:flex-row px-[1rem] mt-[2rem]"
            dir={i18n.language === "en" ? "rtl" : "ltr"}
          >
            <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
              <div className="w-full h-full px-[4rem] py-[2rem] ">
                <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
              </div>
            </div>

            <div
              dir={i18n.language === "en" ? "ltr" : "rtl"}
              className="aboutUsContent flex justify-center items-start flex-col pl-0 sm:pl-4"
            >
              <Typography
                variant="h2"
                color="black"
                className={`mb-2 text-center ${tajawal.className}`}
              >
                {t("about us-nav")}
              </Typography>
              <p>{t("lorem")}</p>
              <LinkButton link="/about">{t("read more")}</LinkButton>
            </div>
          </div>
        </AnimateOnView>
      </div>

      {/* Events and Stats */}
      <div className="statsAndEvents relative bg-[#9DDBAD] mt-[40rem] md:mt-[20rem]">
        <Stats />

        {/* Events */}
        <div className="events pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto">
          {/* map and location */}
          <div className="" dir={i18n.language === "en" ? "ltr" : "rtl"}>
            <Typography
              variant="h2"
              color="black"
              className={`mb-2 ${tajawal.className}`}
            >
              {t("upcoming events")}
            </Typography>
            <AnimateOnView>
              <div className="map-location h-[25rem] mb-[2rem] rounded-lg overflow-hidden">
                <div className="google-map rounded-md overflow-hidden h-full w-full ">
                  <MyGoogleMaps handleMapClick={handleMapClick} zoom={5}>
                    {markers &&
                      markers.map((marker, index) => (
                        <Marker
                          key={index}
                          position={{ lat: marker.lat, lng: marker.lng }}
                          onClick={handlePinClick}
                        />
                      ))}
                  </MyGoogleMaps>
                </div>
              </div>
            </AnimateOnView>
          </div>

          {/* list of the events */}
          <AnimateOnView>
            <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href={"/join"}>
                <EventCard>
                  <div className="mt-[4rem] children">
                    <div className="flex flex-col my-4">
                      <div className="location mb-2 flex items-center py-2">
                        <div className="icon mx-2">
                          <GoLocation className="text-[2rem] text-white" />
                        </div>

                        <Typography variant="h5" className="text-gray-100">
                          بغداد / ابو نؤاس مقابل مطعم ورق عنب
                        </Typography>
                      </div>

                      <div className="time flex items-center">
                        <div className="icon mx-2">
                          <AiOutlineClockCircle className="text-[2rem] text-white" />
                        </div>

                        <Typography
                          dir="ltr"
                          variant="h5"
                          className="text-gray-100"
                        >
                          11:00 am
                        </Typography>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      color="amber"
                      className="w-full font-light normal-case"
                    >
                      {t("join")}
                    </Button>
                  </div>
                </EventCard>
              </Link>

              <Link href={"/join"}>
                <EventCard>
                  <div className="mt-[4rem] children">
                    <div className="flex flex-col my-4">
                      <div className="location mb-2 flex items-center py-2">
                        <div className="icon mx-2">
                          <GoLocation className="text-[2rem] text-white" />
                        </div>
                        <Typography variant="h5" className="text-gray-100">
                          بغداد / ابو نؤاس مقابل مطعم ورق عنب
                        </Typography>
                      </div>
                      <div className="time flex items-center">
                        <div className="icon mx-2">
                          <AiOutlineClockCircle className="text-[2rem] text-white" />
                        </div>
                        <Typography
                          dir="ltr"
                          variant="h5"
                          className="text-gray-100"
                        >
                          11:00 am
                        </Typography>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      color="amber"
                      className="w-full font-light normal-case"
                    >
                      {t("join")}
                    </Button>
                  </div>
                </EventCard>
              </Link>

              <Link href={"/join"}>
                <EventCard>
                  <div className="mt-[4rem] children">
                    <div className="flex flex-col my-4">
                      <div className="location mb-2 flex items-center py-2">
                        <div className="icon mx-2">
                          <GoLocation className="text-[2rem] text-white" />
                        </div>
                        <Typography variant="h5" className="text-gray-100">
                          بغداد / ابو نؤاس مقابل مطعم ورق عنب
                        </Typography>
                      </div>
                      <div className="time flex items-center">
                        <div className="icon mx-2">
                          <AiOutlineClockCircle className="text-[2rem] text-white" />
                        </div>
                        <Typography
                          dir="ltr"
                          variant="h5"
                          className="text-gray-100"
                        >
                          11:00 am
                        </Typography>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      color="amber"
                      className="w-full font-light normal-case"
                    >
                      {t("join")}
                    </Button>
                  </div>
                </EventCard>
              </Link>
            </div>
            <LinkButton link="/events">
              <Typography variant="h5">{t("see more")}</Typography>
            </LinkButton>
          </AnimateOnView>
        </div>
      </div>

      {/* Posts */}
      <div className="posts container sm:mx-auto mt-[6rem]">
        <Typography
          variant="h2"
          color="dark"
          className={`text-center mb-[4rem] ${tajawal.className}`}
        >
          {t("experience")}
        </Typography>
        <div className="">
          <HomePostCard dir="ltr" />
          <HomePostCard dir="rtl" />
          <HomePostCard dir="ltr" />

          <div className="flex justify-center items-center">
            <LinkButton link="/blogs">
              <Typography variant="h5">{t("see more")}</Typography>
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <ImageGallery />

      {/* Organizers */}
      <Organizers />

      {/* Subs */}
      <div className="subs my-[8rem]">
        <AnimateOnView>
          <div className="container mx-auto">
            <Typography
              variant="h3"
              color="dark"
              className={`text-center ${tajawal.className}`}
            >
              {t("subscribe")}
            </Typography>
            <Typography
              variant="p"
              color="dark"
              className={`text-center ${tajawal.className}`}
            >
              {t("stay informed")}
            </Typography>
            <form
              dir={i18n.language === "en" ? "ltr" : "rtl"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField name="email" label={t("email")} error={errors.email}>
                <Input
                  className="bg-[#F6F6F6] pt-2"
                  variant="standard"
                  color="blue"
                  label={t("email")}
                  id="email"
                  {...register("email", {
                    required: t("error- please enter a correct email address"),
                  })}
                />
              </FormField>

              <div className="btn">
                <Button
                  type="submit"
                  size="lg"
                  color="amber"
                  className="rounded-[6px] normal-case bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
                >
                  {t("subscribe")}
                </Button>
              </div>
            </form>
          </div>
        </AnimateOnView>
      </div>
    </div>
  );
}
