import { useTranslation } from "react-i18next";
import NewsCarousel from "./newsCarousel";

const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <div 
      className="container max-w-7xl w-full min-h-[50vh] !mb-20 mx-auto flex flex-col items-center justify-center " 
      id="news"
    >
      <div className="text-4xl my-20 font-bold">{t("news.header")}</div>
      <div className="w-full shrink-0">
        <NewsCarousel />
      </div>
    </div>
  );
};

export default NewsPage;
