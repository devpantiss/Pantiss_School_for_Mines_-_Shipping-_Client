import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AsSeenOn: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black py-10 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-y-8">
      {/* Header section */}
      <div className="relative text-left w-full lg:w-1/2">
        <h2 className="text-2xl text-white lg:text-4xl font-bold relative inline-block">
          As <span className="text-orange-500">Seen</span> On
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            className="absolute -right-6 -top-3 w-8 h-8 lg:w-8 lg:h-8"
          >
            <path
              d="M88 88V43.9944V0H44.0056H0V43.9944H44.0056V88H88Z"
              fill="#D6DDCD"
            />
          </svg>
        </h2>
      </div>

      {/* Slider section */}
      <div className="w-full lg:w-1/2 max-w-7xl">
        <Slider {...settings} className="gap-x-4">
          {/* Example logo items */}
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/330px-DTE_pic_hrwr2q.jpg"
              alt="Max Healthcare"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/CBC_logo.svg_ixkcmg.png"
              alt="Nash"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055539/the-telegraph-logo-vector-removebg-preview_ovbazt.png"
              alt="Panasonic"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/pngwing.com_7_ixeqav.png"
              alt="RPG"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AsSeenOn;
