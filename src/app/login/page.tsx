"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
interface FormType {
  email: string;
  password: string;
}
export default function login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("الرجاء ادخال بريد الكتروني صحيح 'example@email.com'")
        .required(" الرجاء ادخال البريد الالكتروني"),
      password: yup
        .string()
        .max(100, "الرجاء ادخال رسالتك بحد أقصى 100 حرف")
        .min(8, "الرجاء ادخال كلمة سر تحتوي على الاقل ٨ عناصر")
        .required("كلمة السر مطلوبة"),
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
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 h-[80vh]">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
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
          تسجيل دخول
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          اهلا بعودتك ! لاكبر مجتمع تطوعي في العراق
        </p>
        <Link href="/login">
          <p className="mt-2 text-lg leading-8 text-blue-600">
            ليس لديك حساب ؟
          </p>
        </Link>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              البريد الالكتروني
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                {...register("email", {
                  required: "الرجاء ادخال البريد الألكتروني",
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
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              كلمة السر
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                {...register("password", {
                  required: "الرجاء ادخال البريد الألكتروني",
                })}
                id="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="mt-5 block w-full rounded-md bg-[#42A362] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#E3AB5D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          تسجيل دخول
        </button>
      </form>
    </div>
  );
}
