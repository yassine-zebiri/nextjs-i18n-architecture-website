"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react"
import { useTranslations } from "next-intl";
import Image from "next/image"

export const ProjectSectionComponent=()=>{
    const t=useTranslations("HomePage.ProjectsSection");
    const arr=[
        {image:"/assets/p1.jpeg"    ,title:t("itemTOne")        ,description:t("itemDOne")},
        {image:"/assets/p2.jpg"     ,title:t("itemTTwo")        ,description:t("itemDTwo")},
        {image:"/assets/p3.jpg"     ,title:t("itemTThree")      ,description:t("itemDThree")}
    ]
    return(
        <div id="projects" className="section services-section">
            <div className="flex justify-between items-center max-w-360 m-auto">
                <div className="mt-6 p-6">
                    <h3 className="lg:text-4xl sm:text-2xl md:text-3xl text-xl font-bold">{t("titleOne")}</h3>
                    <p className="text-gray-400 dark:text-[#cbd5e1] text-sm sm:text-base font-medium mt-3">{t("description")}</p>
                </div>
                <div>
                    <Button className="btn-sm btn-outline-secondary" endContent={<FontAwesomeIcon icon={faArrowLeft}/>}>
                       {t("btnOne")}
                    </Button>
                </div>
                
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto max-w-360 
            mt-6 lg:px-6 md:px-4 sm:px-2 gap-3">
                {arr.map((item,index)=>(
                    <div  key={index} className="span-col-1">
                        <div className="p-5 hover:shadow-sm hover:-translate-y-4 transition  duration-500 ease-in-out rounded">
                            <div className="rounded-tl-4xl overflow-hidden block">
                                <Image
                                src={item.image}
                                width={640}
                                height={360}
                                alt=".."
                                className="rounded-tl-4xl border border-gray-100 dark:border-[#394b65] hover:scale-105 w-full transition-transform duration-300 ease-in"
                                />
                            </div>
                            <div className="mt-2.5">
                                <h5 className="sm:text-lg text-base sm:font-semibold font-medium mb-1">{item.title}</h5>
                                <p className="sm:text-sm text-xs font-medium text-gray-500 dark:text-[#cbd5e1]">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}