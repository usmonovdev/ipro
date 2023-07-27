import { useTranslation } from "react-i18next";
import { projects } from "../../data";
import { BsCheck } from "react-icons/bs";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{t("projects.title")}</h1>
            <p className="text-xl text-gray-400">
              {t("projects.desc")}
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            {projects.map((project) => {
              return (
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={project.photo}
                      width={540}
                      height={405}
                      alt={project.name}
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <h3 className="h3 mb-3">{t(project.title)}</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        {t(project.desc)}
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <BsCheck className="text-[25px] text-purple-600" />
                          <span>{t(project.featureOne)}</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <BsCheck className="text-[25px] text-purple-600" />
                          <span>{t(project.featureTwo)}</span>
                        </li>
                        <li className="flex items-center">
                          <BsCheck className="text-[25px] text-purple-600" />
                          <span>{t(project.featureThree)}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
