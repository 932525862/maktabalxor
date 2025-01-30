import NewsCarousel from "./newsCarousel";

const NewsPage = () => {
  return <div className="container max-w-7xl w-full h-screen mx-auto">
    <div className="text-4xl mt-20 font-bold">Yangiliklar</div>
    <NewsCarousel />
  </div>;
};

export default NewsPage;
