"use client";

import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";

export const HeroSectionComponent = () => {
  const t=useTranslations("HomePage.Hero");
  return (
    <div className="hero-section">
      <div className="hero-cover  overflow-hidden text-white flex-centered section">
        
        <div className="w-11/12">
        <div className=" py-0.5 text-amber-400 bg-[#ffba0040] border-amber-300 flex items-center px-2 font-medium rounded-lg border w-fit text-xs">
          <div className="block h-2 w-2 mx-1 bg-amber-300 rounded-full"/>
          <span>{t("spanYellow")}</span>
        </div>
        <div className="my-4">

        
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">{t("titleOne")}</h2>
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl  font-bold sm:mt-6 mt-4">{t("titleTwo")}</h2>
          <p className="hero-description">
           {t("description")}
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          <Button className="btn btn-primary">{t("btnOne")}</Button>
          <Button className="btn btn-secondary">{t("btnTwo")}</Button>
        </div>
        </div>
      </div>  
    </div>
    )
}