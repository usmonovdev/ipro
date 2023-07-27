import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1" data-aos="fade-up">
              {t("signup.title")}
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto" data-aos="fade-up">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company-name"
                  >
                    Sure Name
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Sure name"
                    required
                  />
                </div>
              </div>
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
              <div className="text-sm text-gray-500 text-center">
                I agree to be contacted by iPro about this offer as per the
                iPro{" "}
                <Link
                  href="#"
                  className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
                .
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-green-500 hover:bg-green-700 w-full">
                    {t("header.signup")}
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already using Open iPro?{" "}
              <Link
                to="/signin"
                className="text-green-500 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
