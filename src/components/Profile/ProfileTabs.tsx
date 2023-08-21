import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import BlogPost from "../Post/blogPost";

export const ProfileTabs = ({ posts, events }) => {
  return (
    <>
      <Tabs value="html" className=" h-[80vh] mb-20 d">
        <TabsHeader className="my-2 mt-18 dark:bg-blue-gray-600 dark:text-white">
          <Tab key={"posts"} value={"المنشورات"}>
            المنشورات
          </Tab>
          <Tab key={"events"} value={"الحملات"}>
            الحملات
          </Tab>
        </TabsHeader>
        <TabsBody className=" overflow-y-auto max-h-[120vh]">
          <TabPanel
            key={"posts"}
            value={"المنشورات"}
            className="flex-col items-center bg-gray-50 rounded-lg dark:bg-blue-gray-900  dark:text-white"
          >
            {posts.length < 1 ? (
              <Typography>لا يوجد منشورات</Typography>
            ) : (
              <>
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
              </>
            )}
          </TabPanel>
          <TabPanel
            key={"events"}
            value={"الحملات"}
            className="flex-col items-center bg-gray-50 rounded-lg dark:bg-blue-gray-900  dark:text-white"
          >
            {events.length < 1 ? (
              <Typography>لا يوجد منشورات</Typography>
            ) : (
              <>
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[0]} />
              </>
            )}{" "}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
};
