import { faBuilding, faMap } from "@fortawesome/free-regular-svg-icons"
import { faPenNib, faRuler } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"

export const ServicesSetionComponent=()=>{
    const t=useTranslations("HomePage.ServicesSection")
    return(
        <div id="services" className="section text-center   services-section">
            <div className="sm:mt-24 mt-12 ">
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold mb-4">{t("titleOne")}</h2>
                <p className="sm:text-sm md:text-base text-xs text-gray-400 font-medium">{t("description")}</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 gap-3 lg:px-8 sm:px-4 md:px-6 px-2 
            mt-8 md:pb-24 pb-12 place-items-center m-auto max-w-360">

                <div className="card-service">
                    <div className="card-icon">
                        <FontAwesomeIcon className="w-6 h-6 text-gray-700"  icon={faBuilding} />
                    </div>
                    <div className="text-start card-title">
                        <h4>{t("BoxTOne")}</h4>
                        <p>{t("BoxDOne")}</p>
                    </div>
                </div>
                <div className="card-service">
                    <div className="card-icon">
                        <FontAwesomeIcon className="w-6 h-6 text-gray-700"  icon={faRuler} />
                    </div>
                    <div className="text-start card-title">
                        <h4>{t("BoxTTwo")}</h4>
                        <p>{t("BoxDTwo")}</p>
                    </div>
                </div>
                <div className="card-service">
                    <div className="card-icon">
                        <FontAwesomeIcon className="w-6 h-6 text-gray-700"  icon={faMap} />
                    </div>
                    <div className="text-start card-title">
                         <h4>{t("BoxTThree")}</h4>
                        <p>{t("BoxDThree")}</p>
                    </div>
                </div>
                <div className="card-service">
                    <div className="card-icon">
                        <FontAwesomeIcon className="w-6 h-6 text-gray-700"  icon={faPenNib} />
                    </div>
                    <div className="text-start card-title">
                       <h4>{t("BoxTFour")}</h4>
                        <p>{t("BoxDFour")}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}