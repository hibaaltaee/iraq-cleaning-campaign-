import { Avatar, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const ProfileHeader = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      dir={i18n.language === "en" ? "ltr" : "rtl"}
      className="flex bg-gray-100 p-3 py-8 rounded-lg w-full shadow-sm m-0 gap-3 dark:bg-gray-900 dark:text-white"
    >
      <Avatar
        size="md"
        variant="circular"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="tania andrew"
      />
      <div className="flex w-full flex-col gap-0.5 ">
        <div className="flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className=" dark:text-white"
          >
            أمير نشوان
          </Typography>
        </div>
        <Typography color="blue-gray" className=" dark:text-white">
          {t("today")}
        </Typography>
      </div>
    </div>
  );
};
