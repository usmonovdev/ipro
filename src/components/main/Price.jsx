import React from "react";
import { useTranslation } from "react-i18next";
import { definitions } from "../../data";
import { BsCheck } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

const Price = () => {
  console.log(definitions);
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 data-aos="fade-up" className="h2 mb-4">
              {t("price.title")}
            </h1>
            <p data-aos="fade-up" className="text-xl text-gray-400">
              {t("price.desc")}
            </p>
          </div>

          {/* Items */}
          <div className="w-full">
            {/* 1st item */}
            <ul className="flex w-full flex-col md:flex-row"
                    data-aos="fade-up">
              {definitions.map((definition) => {
                return (
                  <li
                    key={definition.id}
                    className={`w-full md:w-1/3 p-3 bg-gray-900 border border-gray-800 flex items-center flex-col ${
                      definition.isSupport
                        ? "scale-1 bg-green-500 md:scale-110"
                        : "scale-1"
                    }`}
                  >
                    <div className="flex items-center flex-col">
                      <h1 className="h2">${definition.price}</h1>
                      <p
                        className={`text-xl ${
                          definition.isSupport
                            ? "text-gray-200"
                            : "text-gray-400"
                        }`}
                      >
                        {t(definition.time)}
                      </p>
                    </div>

                    <div className="py-[20px] px-[5px] flex flex-col gap-1">
                      <h1 className="text-center h2">{t(definition.name)}</h1>
                      <div className="flex flex-row items-center gap-[10px]">
                        {definition.features.one.isChecked ? (
                          <BsCheck
                            className={`${
                              definition.isSupport
                                ? "text-green-600"
                                : "text-green-500"
                            } text-[25px]`}
                          />
                        ) : (
                          <LiaTimesSolid className="text-red-500 text-[20px]" />
                        )}
                        <p>{t(definition.features.one.title)}</p>
                      </div>

                      <div className="flex flex-row items-center gap-[10px]">
                        {definition.features.two.isChecked ? (
                          <BsCheck
                            className={`${
                              definition.isSupport
                                ? "text-green-600"
                                : "text-green-500"
                            } text-[25px]`}
                          />
                        ) : (
                          <LiaTimesSolid className="text-red-500 text-[20px]" />
                        )}
                        <p>{t(definition.features.two.title)}</p>
                      </div>

                      <div className="flex flex-row items-center gap-[10px]">
                        {definition.features.three.isChecked ? (
                          <BsCheck
                            className={`${
                              definition.isSupport
                                ? "text-green-600"
                                : "text-green-500"
                            } text-[25px]`}
                          />
                        ) : (
                          <LiaTimesSolid className="text-red-500 text-[20px]" />
                        )}
                        <p>{t(definition.features.three.title)}</p>
                      </div>

                      <div className="flex flex-row items-center gap-[10px]">
                        {definition.features.four.isChecked ? (
                          <BsCheck
                            className={`${
                              definition.isSupport
                                ? "text-green-600"
                                : "text-green-500"
                            } text-[25px]`}
                          />
                        ) : (
                          <LiaTimesSolid className="text-red-500 text-[20px]" />
                        )}
                        <p>{t(definition.features.four.title)}</p>
                      </div>
                    </div>
                    <button
                      className={`btn-sm ${
                        definition.isSupport
                          ? "bg-green-600 hover:bg-green-700"
                          : "border border-green-500 hover:bg-green-500"
                      }`}
                    >
                      {t("price.button")}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
