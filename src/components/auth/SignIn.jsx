import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1" data-aos="fade-up">
              {t("signin.title")}
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto" data-aos="fade-up">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="azizbek@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-green-500 hover:bg-green-700 w-full">
                    {t("header.signin")}
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              {t("signin.no-account")}{" "}
              <Link
                to="/signup"
                className="text-green-500 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                {t("header.signup")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
