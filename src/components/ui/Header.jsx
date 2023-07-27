import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";
import Language from "./Language";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block font-medium text-[20px]" aria-label="Cruip">
              iPro
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex gap-[10px] grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/signin"
                  className="font-medium text-green-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t("header.signin")}
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm text-white bg-green-500 hover:bg-green-700"
                >
                  {t("header.signup")}
                </Link>
              </li>
              <li>
                {/* Language */}
                <Language />
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
