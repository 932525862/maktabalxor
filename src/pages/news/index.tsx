import NewsCarousel from "./newsCarousel";

const NewsPage = () => {
  return <div className="container max-w-7xl w-full max-h-full h-[85vh] mx-auto">
    <div className="text-4xl my-20 font-bold">Yangiliklar</div>
    <NewsCarousel />
  </div>;
};

export default NewsPage;
