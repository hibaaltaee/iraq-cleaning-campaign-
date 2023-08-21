"use client";
import "./globals.css";
import { Tajawal } from "next/font/google";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { ThemeProvider } from "./theme-provider";

i18n.init({
  lng: "en",
  resources: {
    en: {
      translation: require("../../locales/en.json"),
    },
    ar: {
      translation: require("../../locales/ar.json"),
    },
  },
});

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <title>Clean Iraq</title>
      <body className={tajawal.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
        <I18nextProvider i18n={i18n}>
          <Nav />
          {children}
          <Footer />
        </I18nextProvider>
        </ThemeProvider>
      
      </body>
    </html>
  );
}
