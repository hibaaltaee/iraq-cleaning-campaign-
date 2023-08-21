"use client";
import React from "react";
import { Input, Radio, Textarea } from "../../material-tailwind";
import FormField from "@/components/FormField";
import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });
type Props = {};

export default function page({}: Props) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { t, i18n } = useTranslation();

  const schema = yup
    .object({
      name: yup.string().required(t("error- please enter your name")),
      phone_number: yup
        .string()
        .required(t("error- please enter your phone number")),
      location: yup.string().required(t("error- please enter your address")),
      age: yup.string().required(t("error- please enter your age")),
      gender: yup.string().required(t("error- please select your gender")),
      hobby: yup.string().required(t("error- please select your job")),
      history: yup.string().required(t("error- please select yes or no")),
      message: yup
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
    <div dir="rtl" className="pt-[8rem] pb-[8rem] bg-[#F6FFFA] dark:bg-black  ">
      <div
        className={`container  max-w-[640px] px-[1.5rem] sm:mx-auto ${tajawal.className}`}
      >
        <div className="donor__title text-center ">
          <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-[600]">
            {t("volunteer-form")}
          </h1>
        </div>

        <div className="" dir={i18n.language === "en" ? "ltr" : "rtl"}>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mt-4 text-[1.1rem] sm:text-[1.3rem]">
              {t("volunteer-form-p")}
            </h3>
            <div className="flex flex-col sm:flex-row gap-x-2">
              <FormField name="name" label={t("the name")} error={errors.name}>
                <Input
                  className="bg-[#F6F6F6] pt-2  dark:text-white"
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

            <FormField name="age" label={t("the age")} error={errors.age}>
              <Input
                className="bg-[#F6F6F6] pt-2  dark:text-white"
                id="age"
                variant="standard"
                color="blue"
                label={t("the age")}
                {...register("age", {
                  required: t("error- please enter your age"),
                })}
              />
            </FormField>

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

            <FormField name="gender" label={t("gender")} error={errors.gender}>
              <label className="" htmlFor="sex">
                {t("gender")}
              </label>
              <div className="flex flex-col gap-2">
                <Radio
                  label={t("male")}
                  value={"male"}
                  {...register("gender", {
                    required: t("error- please select your gender"),
                  })}
                />
                <Radio
                  label={t("female")}
                  value={"female"}
                  {...register("gender", {
                    required: t("error- please select your gender"),
                  })}
                />
              </div>
            </FormField>

            <FormField name="hobby" label="الوظيفة" error={errors.hobby}>
              <label className="" htmlFor="job">
                {t("are you")}
              </label>
              <div className="flex flex-col gap-2">
                <Radio
                  value={"student"}
                  label={t("student")}
                  {...register("hobby", {
                    required: t("error- please select your job"),
                  })}
                />
                <Radio
                  value={"employee"}
                  label={t("employee")}
                  {...register("hobby", {
                    required: t("error- please select your job"),
                  })}
                />
                <Radio
                  value={"not_employee"}
                  label={t("do not work")}
                  {...register("hobby", {
                    required: t("error- please select your job"),
                  })}
                />
              </div>
            </FormField>

            <FormField
              name="history"
              label={t("Have you participated in previous volunteer campaigns")}
              error={errors.history}
            >
              <label className="" htmlFor="history">
                {t("Have you participated in previous volunteer campaigns")}
              </label>
              <div className="flex flex-col gap-2">
                <Radio
                  value={"yes"}
                  label={t("yes")}
                  {...register("history", {
                    required: t("error- please select yes or no"),
                  })}
                />
                <Radio
                  value={"no"}
                  label={t("no")}
                  {...register("history", {
                    required: t("error- please select yes or no"),
                  })}
                />
              </div>
            </FormField>

            <FormField
              name="message"
              label={t("Do you have any comment")}
              error={errors.message}
            >
              <Textarea
                variant="standard"
                color="blue"
                label={t("Do you have any comment")}
                className="bg-[#F6F6F6] pt-2"
                id="message"
                {...register("message", {
                  required: t("error- please enter you comment"),
                })}
              />
            </FormField>

            <div className="btn">
              <button
                type="submit"
                className="rounded-[6px] normal-case bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition"
              >
                {t("join")}
              </button>
            </div>
            <p className="note text-[#595959] mt-2  dark:text-white">
              {t("after click button")}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
