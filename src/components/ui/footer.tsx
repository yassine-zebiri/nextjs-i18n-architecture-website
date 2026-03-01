import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const FooterComponent=()=>{
    const t=useTranslations("Footer");
    return(
        <footer className="w-full p-6 bg-primary">
            <div className="max-w-360 m-auto">

                <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 text-center sm:text-start  px-6 py-8">
                    <div className="p-4 px-0 flex flex-row gap-4 sm:flex-col sm:px-4">
                        <div className=" w-fit sm:w-14 h-14 block bg-gray-100 rounded-md">
                            <Image
                            width={64}
                            height={64}
                            src={"/assets/logo.png"}
                            alt="logo"
                            />
                        </div>
                        <div className="block w-fit">
                            <p className="text-gray-400 text-sm font-medium">{t("description")}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <h5 className="text-white text-lg font-bold mb-4">{t("BoxTOne")}</h5>
                        <ul className="text-gray-400 text-sm font-medium space-y-4">
                            <li>{t("BoxTOneList.one")}</li>
                            <li>{t("BoxTOneList.two")}</li>
                            <li>{t("BoxTOneList.three")}</li>
                            <li>{t("BoxTOneList.four")}</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h5 className="text-white text-lg font-bold mb-4">{t("BoxTTwo")}</h5>
                        <ul className="text-gray-400 text-sm font-medium space-y-4">
                            <li>{t("BoxTTwoList.one")}</li>
                            <li>{t("BoxTTwoList.two")}</li>
                            <li>{t("BoxTTwoList.three")}</li>
                            <li>{t("BoxTTwoList.four")}</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h5 className="text-white text-lg font-bold mb-4">{t("BoxTThree")}</h5>
                        <ul className="text-gray-400 text-sm font-medium space-y-4">
                            <li>
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon className="text-amber-400" icon={faLocationDot}/>
                                    <p className="text-sm text-gray-400 font-medium">{t("BoxTThreeList.one")}</p>    
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon className="text-amber-400" icon={faPhone}/>
                                    <p className="text-sm text-gray-400 font-medium">+213 555 12 34 56</p>    
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon className="text-amber-400" icon={faEnvelope}/>
                                    <p className="text-sm text-gray-400 font-medium">{t("BoxTThreeList.two")}</p>    
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="py-6 border-t border-gray-500 w-full">
                    <div className="flex gap-5 justify-between items-center flex-col sm:flex-row">
                        <div>
                            <p className="text-xs text-gray-400 font-medium">{t("titleOne")}</p>
                        </div>
                        <div className="text-white px-4 flex gap-3">
                            <div className="rounded-full flex-centered w-8 h-8 bg-primary-clear">
                                <FontAwesomeIcon className="hover:scale-125 transition-transform ease-in duration-300" icon={faFacebook}/>
                            </div>
                            <div className="rounded-full flex-centered w-8 h-8 bg-primary-clear">
                                <FontAwesomeIcon className="hover:scale-125 transition-transform ease-in duration-300" icon={faInstagram}/>
                            </div>
                            <div className="rounded-full flex-centered w-8 h-8 bg-primary-clear">
                                <FontAwesomeIcon className="hover:scale-125 transition-transform ease-in duration-300" icon={faLinkedin}/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}