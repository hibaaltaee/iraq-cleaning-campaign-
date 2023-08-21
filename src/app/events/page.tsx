"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Textarea,
} from "../material-tailwind";
import MyGoogleMaps from "../../components/MyGoogleMaps";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import FormField from "@/components/FormField";
import { PiTrash } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { GiPathDistance } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AnimateOnView from "@/components/AnimateOnView";
import { useTranslation } from "react-i18next";

export default function events() {
  const { t, i18n } = useTranslation();
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

  const handleMapClick = () => {
    console.log("clicked");
  };
  const handlePinClick = () => {
    console.log("clicked");
  };

  const schema = yup
    .object({
      name: yup.string().required("الرجاء ادخال الاسم"),
      suggestion: yup
        .string()
        .max(100, "الرجاء ادخال رسالتك بحد أقصى 100 حرف")
        .min(10, "الرجاء ادخال رسالتك على الأقل 10 أحرف")
        .required("الرجاء ادخل رسالتك قبل الارسال"),
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
    <div className="pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto">
      {/* map and location */}
      <div className="" dir={i18n.language === "en" ? "ltr" : "rtl"}>
        <Typography variant="h2" color="black" className="mb-2 dark:text-white">
          {t("upcoming events")}
        </Typography>

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
      </div>

      {/* list of the events */}
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

                  <Typography dir="ltr" variant="h5" className="text-gray-100">
                    11:00 am
                  </Typography>
                </div>
              </div>
              <Button size="lg" color="amber" className="w-full font-light">
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

                  <Typography dir="ltr" variant="h5" className="text-gray-100">
                    11:00 am
                  </Typography>
                </div>
              </div>
              <Button size="lg" color="amber" className="w-full font-light">
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

                  <Typography dir="ltr" variant="h5" className="text-gray-100">
                    11:00 am
                  </Typography>
                </div>
              </div>
              <Button size="lg" color="amber" className="w-full font-light">
                {t("join")}
              </Button>
            </div>
          </EventCard>
        </Link>
      </div>

      {/* suggestions form */}
      <div
        dir={i18n.language === "en" ? "ltr" : "rtl"}
        className="mt-[4rem] max-w-[800px] mx-auto"
      >
        <Typography
          variant="h2"
          color="black"
          className="mb-2 text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] dark:text-white"
        >
          {t("suggestions")}
        </Typography>
        <AnimateOnView>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField name="name" label={t("the name")} error={errors.name}>
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="name"
                {...register("name")}
                variant="standard"
                color="blue"
                label={t("the name")}
              />
            </FormField>
            <FormField
              name="suggestion"
              label={t("what is u sg")}
              error={errors.suggestion}
            >
              <Textarea
                variant="standard"
                color="blue"
                label={t("what is u sg")}
                className="bg-[#F6F6F6] pt-2"
                id="suggestion"
                {...register("suggestion")}
              />
            </FormField>

            <div className="btn">
              <Button
                type="submit"
                size="lg"
                color="amber"
                className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
              >
                {t("send")}
              </Button>
            </div>
          </form>
        </AnimateOnView>
      </div>

      <div className="mt-[4rem]" dir="rtl">
        <Typography variant="h2" color="black" className="mb-2 dark:text-white">
          {t("past events")}
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
          <EventCard>
            <div className="mt-[4rem] children">
              <div
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                className="flex flex-col my-4"
              >
                <div className="location mb-2 flex items-center py-2">
                  <div className="icon mx-2">
                    <GiPathDistance className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    {t("cleaned distance")}
                  </Typography>
                </div>
                <div className="garbage flex items-center py-2">
                  <div className="icon mx-2">
                    <PiTrash className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    10000 {t("waste bags-home")}
                  </Typography>
                </div>
                <div className="garbage flex items-center py-2">
                  <div className="icon mx-2">
                    <GoPerson className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    {t("with help of")}
                  </Typography>
                </div>
              </div>
            </div>
          </EventCard>

          <EventCard>
            <div className="mt-[4rem] children">
              <div
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                className="flex flex-col my-4"
              >
                <div className="location mb-2 flex items-center py-2">
                  <div className="icon mx-2">
                    <GiPathDistance className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    {t("cleaned distance")}
                  </Typography>
                </div>
                <div className="garbage flex items-center py-2">
                  <div className="icon mx-2">
                    <PiTrash className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    10000 {t("waste bags-home")}
                  </Typography>
                </div>
                <div className="garbage flex items-center py-2">
                  <div className="icon mx-2">
                    <GoPerson className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    {t("with help of")}
                  </Typography>
                </div>
              </div>
            </div>
          </EventCard>

          <EventCard>
            <div className="mt-[4rem] children">
              <div
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                className="flex flex-col my-4"
              >
                <div className="location mb-2 flex items-center py-2">
                  <div className="icon mx-2">
                    <GiPathDistance className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    {t("cleaned distance")}
                  </Typography>
                </div>
                <div className="garbage flex items-center py-2">
                  <div className="icon mx-2">
                    <PiTrash className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    10000 {t("waste bags-home")}
                  </Typography>
                </div>
                <div className="garbage flex items-center py-2">
                  <div className="icon mx-2">
                    <GoPerson className="text-[2rem] text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-100">
                    {t("with help of")}
                  </Typography>
                </div>
              </div>
            </div>
          </EventCard>
        </div>
      </AnimateOnView>

      <div className="flex justify-center mt-[2rem]">
        <Typography
          variant="h5"
          color="dark"
          className="relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer"
        >
          {t("see more")}
        </Typography>
      </div>
    </div>
  );
}
