"use client";
import React, { useState } from "react";
import { Typography, Input, Button, Textarea } from "../../material-tailwind";
import MyGoogleMaps from "../../../components/MyGoogleMaps";
import { useForm } from "react-hook-form";
import { Marker } from "@react-google-maps/api";
import FormField from "@/components/FormField";
import { SlPicture } from "react-icons/sl";
import { Tajawal } from "next/font/google";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });
type Props = {};

export default function newEvent({}: Props) {
  const { t, i18n } = useTranslation();
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const today = new Date().toISOString().split("T")[0];

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const schema = yup
    .object({
      placeName: yup
        .string()
        .required(t("error- please enter the location of the event")),
      eventDate: yup
        .date()
        .required(t("error- please select the date of the event")),
      eventTime: yup
        .string()
        .required(t("error- please select the time of the event")),
      notes: yup
        .string()
        .max(100, t("error- max message"))
        .min(10, t("error- min message")),
    })
    .required();

  const onSubmit = (data: any) => {
    const formData = {
      geoLocation: marker,
      ...data,
    };
    console.log(formData);

    reset();
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setMarker(newMarker);
    }
  };

  const handlePinClick = () => {
    setMarker(null);
  };

  return (
    <div
      dir={i18n.language === "en" ? "ltr" : "rtl"}
      className="max-w-[800px] pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto"
    >
      <div className="">
        <Typography variant="h2" color="black" className="mb-2 text-center  dark:text-white">
          {t("start new event")}
        </Typography>

        <div className="map-location h-[25rem] mb-[2rem] rounded-lg overflow-hidden">
          <Typography
            variant="h4"
            color="black"
            className="font-light mb-2 mt-4  dark:text-white "
          >
            {t("event geo location")}{" "}
          </Typography>
          <div className="google-map rounded-md overflow-hidden h-full w-full ">
            <MyGoogleMaps handleMapClick={handleMapClick} zoom={5}>
              {marker && (
                <Marker
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={handlePinClick}
                />
              )}
            </MyGoogleMaps>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto ">
        {/* place picture */}
        <FormField name="placeImage" label="صورة المكان">
          <div className="flex justify-start items-start">
            <div className="w-full">
              <label
                htmlFor="placeImage"
                className="flex w-full items-center"
                dir={i18n.language === "en" ? "ltr" : "rtl"}
              >
                <div className="h-full p-6 flex bg-green-300 rounded-full shadow-md cursor-pointer items-center ">
                  <SlPicture className="text-[1.5rem]" />
                </div>
                <Typography
                  variant="p"
                  className={`text-gray-600 font-light mb-2 mt-4 mr-4 ml-4 ${tajawal.className}`}
                >
                  {t("event image")}
                </Typography>
              </label>
            </div>
            <input
              type="file"
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2 hidden "
              id="placeImage"
              color="blue"
              {...register("placeImage")}
            />
          </div>
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {/* place name */}
          <FormField
            name="placeName"
            label={t("event location")}
            error={errors.placeName}
          >
            <Input
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2"
              id="placeName"
              variant="standard"
              color="blue"
              label={t("event location")}
              {...register("placeName", {
                required: t("error- please enter the location of the event"),
              })}
            />
          </FormField>

          {/* campaign date */}
          <FormField
            name="campaignDate"
            label={t("event date")}
            error={errors.eventDate}
          >
            <Input
              type="date"
              min={today}
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2"
              id="campaignDate"
              variant="standard"
              color="blue"
              label={t("event date")}
              {...register("eventDate", {
                required: t("error- please select the date of the event"),
              })}
            />
          </FormField>

          {/* campaign time */}
          <FormField
            name="campaignTime"
            label={t("event time")}
            error={errors.eventTime}
          >
            <Input
              type="time"
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2"
              id="campaignTime"
              variant="standard"
              color="blue"
              label={t("event time")}
              {...register("eventTime", {
                required: t("error- please select the time of the event"),
              })}
            />
          </FormField>
        </div>

        {/* additional notes */}
        <FormField
          name="additionalNotes"
          label={t("notes")}
          error={errors.notes}
        >
          <Textarea
            variant="standard"
            color="blue"
            label={t("notes")}
            className="bg-[#F6F6F6] pt-2"
            id="additionalNotes"
            {...register("notes", {
              required: t("error- please enter your notes"),
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
            {t("start")}
          </Button>
        </div>
      </form>
    </div>
  );
}
