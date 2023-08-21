"use client";
import FormField from "@/components/FormField";
import React from "react";
import { Textarea, Input, Button } from "../material-tailwind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import "tailwindcss/tailwind.css";

//contact us page
const Contact = () => {
  const { t, i18n } = useTranslation();

  const schema = yup
    .object({
      name: yup.string().required(t("error- please enter your name")),
      email: yup
        .string()
        .email(t("error- please enter a correct email address"))
        .required(t("error- please enter a correct email address")),
      message: yup
        .string()
        .max(100, t("error- max message"))
        .min(10, t("error- min message"))
        .required(t("error- please enter your message")),
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
    <div
      className="p-10 max-w-3xl mx-auto w-auto text-center pt-[12rem] pb-[6rem]"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <h1 className="text-3xl font-bold font-sans underline decoration-green-300 decoration-8  underline-offset-8 ">
        {t("contact us-nav")}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-4 mt-4 border-t flex flex-col gap-5  w-auto text-right"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
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
        <FormField name="email" label={t("email")} error={errors.email}>
          <Input
            className="bg-[#F6F6F6] pt-2  dark:text-white"
            variant="standard"
            color="blue"
            label={t("email")}
            id="email"
            {...register("email", {
              required: t("error- please enter a correct email address"),
            })}
          />
        </FormField>
        <FormField
          name="message"
          label={t("what is your message")}
          error={errors.message}
        >
          <Textarea
            variant="standard"
            color="blue"
            label={t("what is your message")}
            className="bg-[#F6F6F6]"
            id="message"
            {...register("message", {
              required: t("error- please enter your message"),
            })}
          />
        </FormField>
        <div className="btn">
          <Button
            type="submit"
            size="lg"
            color="amber"
            className="rounded-[6px] normal-case bg-[#E3AB5D] px-8 py-[.5rem] mt-[1rem] font-light"
          >
            {t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
