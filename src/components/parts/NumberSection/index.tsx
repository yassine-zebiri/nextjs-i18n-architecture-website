import { useTranslations } from "next-intl"

export const NumberSectionComponent=()=>{
    const t=useTranslations("HomePage.NumberSection");
    return(
        <div className="section number-section bg-[#0f1729]">
            <div className="max-w-360 m-auto grid md:grid-cols-4 grid-cols-2">
                <div className="box-number">
                    <h4>
                        +15
                    </h4>
                    <p>
                       {t("TOne")}
                    </p>
                </div>

                <div className="box-number">
                    <h4>
                        +120
                    </h4>
                    <p>
                       {t("TTwo")}
                    </p>
                </div>
                <div className="box-number">
                    <h4>
                        +35
                    </h4>
                    <p>
                       {t("TThree")}
                    </p>
                </div>
                <div className="box-number">
                    <h4>
                        100%
                    </h4>
                    <p>
                       {t("TFour")}
                    </p>
                </div>

            </div>

        </div>
    )
}