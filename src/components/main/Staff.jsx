import { useTranslation } from "react-i18next";
import TestimonialImage01 from "../../assets/images/testimonial-01.jpg";
import TestimonialImage02 from "../../assets/images/testimonial-02.jpg";
import TestimonialImage03 from "../../assets/images/testimonial-03.jpg";
import { staff } from "../../data";

export default function Staff() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{t("staff.title")}</h2>
            <p className="text-xl text-gray-400">
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            {staff.map((staffs) => {
              return (
                <div
                  key={staffs.id}
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img
                        className="rounded-full"
                        src={staffs.photo}
                        width={48}
                        height={48}
                        alt={staffs.name}
                      />
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis similique exercitationem culpa, quos quidem, quam
                    deserunt quasi vitae, id sed est? Ad quam fugiat culpa hic
                    animi deleniti perferendis exercitationem.
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      {staffs.name}
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-green-500 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      {staffs.job}
                    </a>
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
