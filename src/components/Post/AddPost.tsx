import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { ProfileHeader } from "../Profile/ProfileHeader";
import { useTranslation } from "react-i18next";

export const AddPost: any = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { t, i18n } = useTranslation();

  const handleSubmit = () => {
    console.log("post created");
    handleOpen();
  };
  return (
    <>
      <div className="flex w-[40%] flex-row items-center gap-2 rounded-lg bg-gray-900/5 p-5 shadow-md my-4 dark:text-white">
        <div className="flex">
          <IconButton
            variant="text"
            className="rounded-full"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="green"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </IconButton>
        </div>
        <Textarea
          rows={1}
          placeholder={t("add_post_desc")}
          className="min-h-full !border-0 focus:border-transparent"
          containerProps={{
            className: "grid h-full",
          }}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onClick={handleOpen}
        />
      </div>
      <Dialog
        open={open}
        size="lg"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex-col items-start">
          <ProfileHeader />
        </DialogHeader>
        <DialogBody className="bg-gray-100 rounded-lg shadow-sm mx-4 flex-col dark:bg-blue-gray-900 ">
          <Textarea
            variant="static"
            placeholder={t("add_post_desc")}
            rows={3}
          />
          <IconButton variant="text" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="green"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </IconButton>
        </DialogBody>
        <DialogFooter className="flex items-start justify-between">
          <Button
            size="lg"
            color="amber"
            className="rounded-[6px] px-8 py-[.5rem] mt-[1.5rem] font-light"
            onClick={handleSubmit}
          >
            {t("publish")}
          </Button>
          <Button
            size="lg"
            color="amber"
            className="rounded-[6px] bg-[#fffff] px-8 py-[.5rem] mt-[1.5rem] font-light"
            onClick={handleOpen}
          >
            {t("cancel")}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
