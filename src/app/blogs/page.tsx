"use client";
import React, { useState } from "react";
import { AddPost } from "@/components/Post/AddPost";
import { useRouter } from "next/navigation";
import BlogPost from "@/components/Post/blogPost";
import PostDetails from "./[...slug]/page";
import { useTranslation } from "react-i18next";
const posts = [
  {
    description: `"حملتنا اليوم راح تكون مختلفة، لذلك نرجو منكم الالتزام بالخطوات حتى
    نحرص على تنظيم رائع 🟢 كلش كلش ضروري تسجلون وتجيبون الباركود مال
    تسجيل. بدون تسجيل وباركود ما راح نكدر ننطيكم المستلزمات مال حملة.
    هذا رابط التسجيل: https://academy.bloom.pm/ar/programs/clean.iraq/
    🟢 اذا عدكم مطارة مي، جيبوها وياكم. احنا راح نوفر مطارات بس الاعداد
    محدودة ونريد نشاركها وية اكبر عدد من الناس. من تخلص المطارات راح
    تكون خلصت الحملة وبعد ما نكدر نستقبل متطوعين. لذلك اذا جبتو وياكم
    مطاراتكم، هذا يعني راح نكدر نستقبل متطوعين اكثر 🟢 تطبيق كريم يوفر
    الكم رحلات مجانية باستخدام كود الخصم CLEANIRAQ. اذا ما تحتاجون
    الخصم، خلو الاخرين سيتفادون منه. اذا ممكن اكثر من شخص يشترك بالخصم
    من نفس المنطقة، هذا راح يكون افضل حتى نكدر نفيد اكبر عدد من الناس.
    نرجو تستخدمون التعليقات بهذا البوست حتى تنسقون مع بعض🙏 🟢هذي الحملة
    راح تكون اول حدث يتنظم بهذي الطريقة، لذلك نرجو منكم تتعاونون ويانا
    واعذرونا من اي تقصير. احنا كلنا دا نتعلم سوية ونشكر ثقتكم ودعمكم
    النا متحمسين نشوفكم اليوم🙏"`,
    slug: 1,
  },
  {
    description: `"حملتنا اليوم راح تكون مختلفة، لذلك نرجو منكم الالتزام بالخطوات حتى
    نحرص على تنظيم رائع 🟢 كلش كلش ضروري تسجلون وتجيبون الباركود مال
    تسجيل. بدون تسجيل وباركود ما راح نكدر ننطيكم المستلزمات مال حملة.
    هذا رابط التسجيل: https://academy.bloom.pm/ar/programs/clean.iraq/
    🟢 اذا عدكم مطارة مي، جيبوها وياكم. احنا راح نوفر مطارات بس الاعداد
    محدودة ونريد نشاركها وية اكبر عدد من الناس. من تخلص المطارات راح
    تكون خلصت الحملة وبعد ما نكدر نستقبل متطوعين. لذلك اذا جبتو وياكم
    مطاراتكم، هذا يعني راح نكدر نستقبل متطوعين اكثر 🟢 تطبيق كريم يوفر
    الكم رحلات مجانية باستخدام كود الخصم CLEANIRAQ. اذا ما تحتاجون
    الخصم، خلو الاخرين سيتفادون منه. اذا ممكن اكثر من شخص يشترك بالخصم
    من نفس المنطقة، هذا راح يكون افضل حتى نكدر نفيد اكبر عدد من الناس.
    نرجو تستخدمون التعليقات بهذا البوست حتى تنسقون مع بعض🙏 🟢هذي الحملة
    راح تكون اول حدث يتنظم بهذي الطريقة، لذلك نرجو منكم تتعاونون ويانا
    واعذرونا من اي تقصير. احنا كلنا دا نتعلم سوية ونشكر ثقتكم ودعمكم
    النا متحمسين نشوفكم اليوم🙏"`,
    slug: 3,
  },
];

export default function Blog() {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState(null);
  const { t, i18n } = useTranslation();

  const openModal = (post: any) => {
    setSelectedPost(post);
    router.push(`/blogs/${post.slug}`);
  };

  const closeModal = () => {
    setSelectedPost(null);
    router.push("/blogs");
  };
  return (
    <div
      className=" container sm:px-[1rem] md:px-[1.5rem] sm:mx-auto flex-column justify-center items-center dark:bg-black"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className=" my-5 dark:bg-blue-gray-900">
        <AddPost />
      </div>
      <div className="flex max-w-full flex-wrap justify-center bg-gray-50 rounded-md dark:bg-blue-gray-900 ">
        {posts.map((post) => (
          <BlogPost
            post={post}
            handleOpen={openModal}
            closeModal={closeModal}
          />
        ))}
      </div>
    </div>
  );
}
