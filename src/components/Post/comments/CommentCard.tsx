import { ProfileCard } from "@/components/Profile/ProfileCard";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const CommentCard = ({}: any) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Card
        dir={i18n.language === "en" ? "ltr" : "rtl"}
        color="transparent"
        shadow={false}
        className="w-full max-w-full p-2 max-h-[200px] border-4 transition ease-out delay-100 hover:border-green-300  dark:text-white"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0"
        >
          <ProfileHeader />
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className="overflow-y-auto h-20">
            حملتنا اليوم راح تكون مختلفة، لذلك نرجو منكم الالتزام بالخطوات حتى
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
            النا متحمسين نشوفكم اليوم🙏
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};
