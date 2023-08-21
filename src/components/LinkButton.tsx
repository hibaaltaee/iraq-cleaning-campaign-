import React, { ReactNode } from "react";
import Link from "next/link";
import { Typography } from "../app/material-tailwind";

type Props = {
  link: string;
  children: ReactNode;
};

export default function LinkButton({ link, children }: Props) {
  return (
    <Link href={link} className="flex justify-center mt-[2rem]">
      <div
        className={`relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0 after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 after:bg-green-200 px-2 overflow-hidden after:duration-[.4s] cursor-pointer mix-blend-multiply`}
      >
        {children}
      </div>
    </Link>
  );
}
