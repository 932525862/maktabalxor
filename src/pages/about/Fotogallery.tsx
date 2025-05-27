import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const videos = [
  "https://www.youtube.com/embed/phHcUDvIKDU?si=cN3c3HqjR9DHbJCZ",
  "https://www.youtube.com/embed/PqzrycHWyJk?si=9GMGUiLWfi2P8uTf&amp;start=1",
  "https://www.youtube.com/embed/kxLe1CTRE2g?si=pj0ql17tQrJyCrwl&amp;start=1",
];

const Fotogallery: React.FC = () => {
  return (
    <div className="bg-[#186e38] text-white py-12 px-4">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-yellow-300">Maktab hayoti</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">Fotogalereya</h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto my-4" />
      </div>

      <div className="max-w-4xl mx-auto">
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="rounded-lg"
        >
          {videos.map((src, index) => (
            <div key={index} className="aspect-video">
              <iframe
                src={src}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Fotogallery;
