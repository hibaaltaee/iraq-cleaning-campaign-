import React, { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "../app/material-tailwind";

type Props = {
  children: ReactNode;
};

export default function EventCard({ children }: Props) {
  return (
    <Card
      dir="rtl"
      className="relative grid w-full overflow-hidden shadow-none hover:shadow-md transition dark:bg-black"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/assets/card_1.jpg')] bg-cover bg-center dark:bg-black"
      >
        <div className="to-bg-black-10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50" />
      </CardHeader>
      <CardBody className="relative flex flex-col justify-between py-8 px-6 md:px-12 md:py-4">
        <Typography
          variant="h2"
          color="white"
          className="mb-[8rem] text-center font-bold text-[1.8rem] sm:text-[1.9rem] md:text-[2rem]"
        >
          2023/08/20
        </Typography>
        {children}
      </CardBody>
    </Card>
  );
}
