"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, Input } from "../../material-tailwind";
import FormField from "@/components/FormField";
import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

type Props = {};

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export default function page({}: Props) {
  const { t, i18n } = useTranslation();

  const [options, setOptions] = useState([
    {
      id: 1,
      label: "cleaning_eq",
      title: t("option-1"),
    },
    {
      id: 2,
      label: "tools",
      title: t("option-2"),
    },
    {
      id: 3,
      label: "trashcans",
      title: t("option-3"),
    },
    {
      id: 4,
      label: "clothes",
      title: t("option-4"),
    },
    {
      id: 5,
      label: "part_transfer",
      title: t("option-5"),
    },
    {
      id: 6,
      label: "trash_transfer",
      title: t("option-6"),
    },
    {
      id: 7,
      label: "finance",
      title: t("option-7"),
    },
    {
      id: 8,
      label: "others",
      title: t("option-8"),
    },
  ]);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const schema = yup
    .object({
      name: yup.string().required(t("error- please enter your name")),
      phone_number: yup
        .string()
        .required(t("error- please enter your phone number")),
      location: yup.string().required(t("error- please enter your address")),
      options: yup.array().min(1, t("error- select at least one option")),
      others: yup
        .string()
        .max(100, t("error- max message"))
        .min(10, t("error- min message")),
    })
    .required();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div
      dir={i18n.language === "en" ? "ltr" : "rtl"}
      className="pt-[8rem] pb-[8rem] bg-[#F6FFFA] dark:bg-black"
    >
      <div
        className={`container  max-w-[640px] px-[1.5rem] sm:mx-auto ${tajawal.className}`}
      >
        <div className="donor__title text-center">
          <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-[600]">
            {t("donor-form")}
          </h1>
        </div>

        <div className=" dark:bg-black">
          <form className="w-full dark:bg-black" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              name="options"
              label={t("What would you like to donate")}
              error={errors.options}
            >
              <div className="">
                <h1 className="mb-[.8rem] text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem]">
                  {t("What would you like to donate")}
                </h1>
                {options.map((option) => (
                  <div key={option.id}>
                    <div className="py-[.2rem] flex items-center">
                      <Checkbox
                        color="teal"
                        id={option.title}
                        value={option.title}
                        
                        {...register("options", {
                          required: t("error- select at least one option"),
                        })}
                      />

                      <label
                        htmlFor={option.title}
                        className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] mx-2"
                      >
                        {option.title}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </FormField>

            <FormField
              name="others"
              label={t("other tools")}
              error={errors.others}
            >
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="others"
                variant="standard"
                color="blue"
                label={t("other tools")}
                {...register("others", {
                  required: t("error- explain what you want to donate with"),
                })}
              />
            </FormField>
            <div className="flex flex-col sm:flex-row gap-x-2">
              <FormField name="name" label={t("the name")} error={errors.name}>
                <Input
                  className="bg-[#F6F6F6] pt-2 dark:text-white"
                  id="name"
                  variant="standard"
                  color="blue"
                  label={t("the name")}
                  {...register("name", {
                    required: t("error- please enter your name"),
                  })}
                />
              </FormField>

              <FormField
                name="phoneNumber"
                label={t("phone number")}
                error={errors.phone_number}
              >
                <Input
                  type="tel"
                  className="bg-[#F6F6F6] pt-2  dark:text-white"
                  id="phoneNumber"
                  variant="standard"
                  color="blue"
                  label={t("phone number")}
                  {...register("phone_number", {
                    required: t("error- please enter your phone number"),
                  })}
                />
              </FormField>
            </div>

            <FormField
              name="location"
              label={t("living")}
              error={errors.location}
            >
              <Input
                className="bg-[#F6F6F6] pt-2  dark:text-white"
                id="location"
                variant="standard"
                color="blue"
                label={t("living")}
                {...register("location", {
                  required: t("error- please enter your address"),
                })}
              />
            </FormField>

            <div className="btn">
              <button className="rounded-[6px] normal-case bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition">
                {t("join")}
              </button>
            </div>
            <p className="note text-[#595959] mt-2  dark:text-white">
              {t("after click donat button")}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
