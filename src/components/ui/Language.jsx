import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { languages } from "../../data";
import { useTranslation } from "react-i18next";

const Language = () => {
  const [selected, setSelected] = useState(languages[0]);
  const { i18n } = useTranslation()
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative button-sm cursor-pointer w-full cursor-default bg-purple-600 btn-sm py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute cursor-pointer mt-1 max-h-60 w-full overflow-auto rounded-sm bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages.map((language) => (
                <Listbox.Option
                  key={language.id}
                  onClick={() => i18n.changeLanguage(language.lng)}
                  className={({ active }) =>
                    `relative cursor-pointer hover:bg-gray-400 transition duration-150 ease-in-out select-none py-2 px-4 ${
                      active ? "text-gray-700" : "text-gray-900"
                    }`
                  }
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {language.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Language;
