import { useTranslation } from "react-i18next";
import { socials } from "../../data";

export default function Social() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{t("socials.title")}</h2>
            <p className="text-xl text-gray-400">{t("socials.desc")}</p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {socials.map((social) => {
              return (
                <div
                  className="relative flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <div className="w-[64px] h-[64px] bg-purple-600 flex items-center justify-center rounded-full">
                    <social.icon className="text-[1.4rem]" />
                  </div>
                  <h4 className="h4 mb-2">{t(social.title)}</h4>
                  <p className="text-lg text-gray-400 text-center">
                    {t(social.desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
