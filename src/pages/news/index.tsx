
import { useTranslation } from "react-i18next";
import NewsCarousel from "./newsCarousel";

const NewsPage = () => {
  const { t } = useTranslation();
  return <div className="container max-w-7xl w-full max-h-full h-full !mb-20 md:h-[75vh] mx-auto flex flex-col items-center justify-center" id="news">
    <div className="text-4xl my-20 font-bold">{t("news.header")}</div>
    <NewsCarousel />
  </div>;
};

export default NewsPage;
