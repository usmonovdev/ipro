import VideoThumb from "../../assets/images/hero-image-01.jpg";
import ModalVideo from "../ui/ModalVideo";
import video from "../../assets/videos/video.mp4";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              {t("home.title")}
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("home.desc")}
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  className="btn text-white bg-green-500 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0"
                  to="/signin"
                >
                  {t("home.button")}
                </Link>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={600}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video={video}
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
