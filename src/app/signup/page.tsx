"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { log } from "console";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
interface FormType {
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
  phone: string;
}
export default function signup() {
  const schema = yup
    .object({
      firstName: yup.string().required("هذا الحقل مطلوب"),
      lastName: yup.string().required("هذا الحقل مطلوب"),
      email: yup
        .string()
        .email("الرجاء ادخال بريد الكتروني صحيح 'example@email.com'")
        .required(" الرجاء ادخال البريد الالكتروني"),

      password1: yup
        .string()
        .max(100, "الرجاء ادخال رسالتك بحد أقصى 100 حرف")
        .min(8, "الرجاء ادخال كلمة سر تحتوي على الاقل ٨ عناصر")
        .required("كلمة السر مطلوبة"),
      password2: yup
        .string()
        .required("كلمة السر مطلوبة")
        .test("passwords-match", "Passwords must match", function (value) {
          return value === this.parent.password1;
        }),
      phone: yup.string().required("الرجاء ادخال رقم الهاتف"),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const onSubmit: SubmitHandler<FormType> = async (data) => {
    console.log("hi");
    reset();
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
        dir="ltr"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#66FF99] to-[#42A362] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          انشاء حساب
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          انضم لاكبر مجتمع تطوعي في العراق ، وكن سفير النظافة الجديد
        </p>
        <Link href="/signup">
          <p className="mt-2 text-lg leading-8 text-blue-600">
            لديك حساب بالفعل ؟{" "}
          </p>
        </Link>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الاسم الاول
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="firstName"
                autoComplete="given-name"
                {...register("firstName", {
                  required: "هذا الحقل مطلوب",
                })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الاسم الاخير
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("lastName", {
                  required: "هذا الحقل مطلوب",
                })}
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              البريد الألكتروني
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                {...register("email", {
                  required: "هذا الحقل مطلوب",
                })}
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              رقم الهاتف{" "}
            </label>
            <input
              type="phone"
              {...register("phone", {
                required: "هذا الحقل مطلوب",
              })}
              id="phone"
              autoComplete="phone "
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              كلمة السر{" "}
            </label>
            <div className="mt-2.5">
              <input
                type="password1"
                id="password1"
                {...register("password1", {
                  required: "هذا الحقل مطلوب",
                })}
                autoComplete="password1"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password1 && (
                <span className="text-red-500">{errors.password1.message}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              كلمة السر{" "}
            </label>
            <div className="mt-2.5">
              <input
                type="password2"
                {...register("password2", {
                  required: "هذا الحقل مطلوب",
                })}
                id="password2"
                autoComplete="password2"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password2 && (
                <span className="text-red-500">{errors.password2.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="mt-5 block w-full rounded-md bg-[#42A362] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#E3AB5D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            انشاء حساب{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
