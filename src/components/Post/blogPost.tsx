import { Like } from "@/components/Post/LikeBtn";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Carousel,
  Textarea,
  Input,
} from "@material-tailwind/react";
import "boxicons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogPost({ post, handleOpen }: any) {
  const router = useRouter();
  return (
    <div className="mx-1">
      <Card className="max-w-[600px] max-h-[600px] overflow-hidden m-3 px-6 shadow-lg bg-gray-50 my-7 border-r-4 border-b-4 transition ease-out delay-100 hover:border-green-300 dark:bg-blue-gray-900 dark:text-white">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center justify-between pt-0 pb-4 mx-0 p-10 "
        >
          <ProfileHeader />
        </CardHeader>
        <CardBody
          className="py-1 bg-gray-100 rounded-lg p-3 mx-4 dark:bg-blue-gray-900 dark:text-white"
          onClick={() => handleOpen(post)}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover rounded-xl"
            style={{ border: "4px solid #9DDBAD" }}
          />
          <br />
          <Typography>
            {post?.description.length <= 20
              ? post?.description
              : post?.description.slice(0, 250) + "عرض المزيد ...."}
          </Typography>
        </CardBody>
        {/* <CardFooter className="flex flex-row justify-start items-center bg-gray-100 rounded-lg p-1 mx-0 mb-3 mt-1 gap-8 ">
          <div className="max-w-[20%]">
            <Like />
          </div>
          <div className="max-w-[80%] ">
            <Input size="md" label="اكتب تعليقا" />
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
}
