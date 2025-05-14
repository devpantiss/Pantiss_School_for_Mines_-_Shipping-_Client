import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkWithBest: React.FC = () => {
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
    <div className="bg-white py-10 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-y-8">
      {/* Header section */}
      <div className="relative text-left w-full lg:w-1/2">
        <h2 className="text-2xl text-black lg:text-4xl font-bold relative inline-block">
        <span className="text-orange-500">Work</span> With The <span className="text-orange-500">Best</span> 
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
              src="https://labournet.in/wp-content/uploads/2022/01/jsw.png"
              alt="Max Healthcare"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/ceat.png"
              alt="Nash"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/volvo.png"
              alt="Panasonic"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/panasonic.png"
              alt="RPG"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/mahindra.png"
              alt="RPG"
              className="h-16 lg:h-24 mx-auto object-contain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WorkWithBest;
