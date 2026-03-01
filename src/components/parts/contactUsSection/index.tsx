"use client";
import { Button } from "@heroui/react"
import { useTranslations } from "next-intl";

export const ContactUsSectionComponent=()=>{
    const t=useTranslations("HomePage.ContactUsSection");
    return(
        <div id="contactUs" className="section ">
            <div className="max-w-250 my-0 m-auto p-6 bg-primary rounded-lg">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className="flex-centered">
                        <div className="">
                            <h3 className="lg:text-4xl text-xl sm:text-2xl md:text-3xl  font-bold text-white">{t("titleOne")}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm font-medium mt-4">{t("descriptionOne")}</p>
                        </div>  
                    </div>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="py-4 text-center">
                                <h3 className="md:text-2xl sm:text-xl text-lg font-bold text-white ">{t("titleTwo")}</h3>
                                <p  className="text-gray-400 text-xs sm:text-sm font-medium mt-3">{t("descriptionTwo")}</p>
                            </div>
                            <div className="form-input-label">
                                <label htmlFor="">{t("LabelOne")}</label>
                                <input type="text" placeholder={t("placeHolder")}/>
                            </div>
                            <div className="form-input-label">
                                <label htmlFor="">{t("LabelTwo")}</label>
                                <input type="email" placeholder={t("placeHolder")}/>
                            </div>
                            <div className="form-input-label">
                                <label htmlFor="">{t("LabelThree")}</label>
                                <textarea rows={5} placeholder={t("placeHolder")}></textarea>
                            </div>
                            <div>
                                <Button className="btn-sm btn-primary">{t("btnOne")}</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}