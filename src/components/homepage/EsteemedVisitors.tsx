import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const visitors = [
  {
    name: "His Holiness",
    title: "The 14th Dalai Lama",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tenzin_Gyatso_-_14th_Dalai_Lama_%282012%29.jpg/220px-Tenzin_Gyatso_-_14th_Dalai_Lama_%282012%29.jpg",
  },
  {
    name: "Ameenah Gurib-Fakim",
    title: "6th President of Mauritius",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ameenah_Gurib-Fakim_%28cropped%29.jpg/220px-Ameenah_Gurib-Fakim_%28cropped%29.jpg",
  },
  {
    name: "Mr. Tony Abbott",
    title: "Former Australian Prime Minister",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tony_Abbott_-_2010.jpg/250px-Tony_Abbott_-_2010.jpg",
  },
  {
    name: "Hamid Karzai",
    title: "President of Afghanistan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hamid_Karzai_listens_to_Barack_Obama_in_Kabul_2012_%28cropped%29.jpg/220px-Hamid_Karzai_listens_to_Barack_Obama_in_Kabul_2012_%28cropped%29.jpg",
  },
  {
    name: "Nikki Haley",
    title: "The Governor of South Carolina",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nikki_Haley_official_photo.jpg/250px-Nikki_Haley_official_photo.jpg",
  },
  {
    name: "Shri Narendra Modi",
    title: "Prime Minister of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Official_Photograph_of_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_2014.jpg/800px-The_Official_Photograph_of_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_2014.jpg",
  },
];

const CustomPrevArrow = (props: any) => (
  <button
    {...props}
    className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg z-10"
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = (props: any) => (
  <button
    {...props}
    className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg z-10"
  >
    <FaArrowRight />
  </button>
);

const EsteemedVisitors: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black py-12 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          Esteemed <span className="text-orange-500">Visitors</span>
        </h2>
        <Slider {...settings} className="relative">
          {visitors.map((visitor, index) => (
            <div key={index} className="px-4">
              <div className="text-center bg-orange-600 rounded-2xl overflow-hidden shadow-md transition transform hover:scale-105 h-[360px] duration-300">
                <img
                  src={visitor.image}
                  alt={visitor.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{visitor.name}</h3>
                  <p className="text-sm">{visitor.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EsteemedVisitors;