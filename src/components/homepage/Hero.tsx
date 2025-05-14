import React, { memo } from "react";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Updated Slide interface to include video
// interface Slide {
//   url?: string; // Image URL
//   videoUrl?: string; // Video URL
//   caption: string;
// }

// Slide data (videos and images)
// const slides: Slide[] = [
//   {
//     videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742369429/WhatsApp_Video_2025-03-19_at_12-VEED_qo9hv6.mp4",
//     caption: "Advanced Simulation Training for Industry Professionals",
//   },
//   {
//     videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742991998/857012-mp4_y3u4on.mp4",
//     caption: "Experience AR/VR & Real-Time Gigantic Machines",
//   },
//   {
//     url: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820282/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_2_ltergg.jpg",
//     caption: "Explore Career Counseling & Skill Development",
//   },
// ];

// Custom Arrows
// const NextArrow = memo(({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg z-10"
//     aria-label="Next slide"
//   >
//     <FaChevronRight size={20} />
//   </button>
// ));
// NextArrow.displayName = "NextArrow";

// const PrevArrow = memo(({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg z-10"
//     aria-label="Previous slide"
//   >
//     <FaChevronLeft size={20} />
//   </button>
// ));
// PrevArrow.displayName = "PrevArrow";

// SlideItem Component
// const SlideItem = memo(({ slide }: { slide: Slide }) => (
//   <div className="relative rounded-lg overflow-hidden shadow-xl h-[600px] w-full">
//     {slide.videoUrl ? (
//       <video
//         src={slide.videoUrl}
//         className="w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         aria-hidden="true"
//       />
//     ) : (
//       <img
//         src={slide.url}
//         alt={slide.caption}
//         className="w-full h-full object-cover"
//         loading="lazy"
//         decoding="async"
//       />
//     )}
//     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-center px-4 py-2 rounded-lg text-lg font-medium max-w-[90%]">
//       {/* {slide.caption} */}
//     </div>
//   </div>
// ));
// SlideItem.displayName = "SlideItem";

const HeroSection: React.FC = () => {
  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 5000,
  //   pauseOnHover: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   lazyLoad: "ondemand" as const,
  //   accessibility: true,
  // };

  return (
    <div className="relative mt-16 text-white h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742991998/video-poster_kzq1zq.jpg"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742369429/WhatsApp_Video_2025-03-19_at_12-VEED_qo9hv6.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Main Content */}
      <div className="relative flex mx-auto max-w-7xl flex-col md:flex-row items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-12 px-8">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6 mt-16 animate-fadeIn">
          <h1 className="text-5xl lg:text-6xl font-bold text-center lg:text-left text-white leading-tight">
            India's largest school exclusively for  <br />
            <span className="text-orange-500">Mines, Steel & Power Sector.</span>
          </h1>
          <p className="text-lg text-gray-300 text-center lg:text-left">
            Explore Career Counseling, Tech Skilling, and India's First Job Search Engine for the Manufacturing Sector – All in One Place.
          </p>

          <h2 className="text-2xl font-bold text-center lg:text-left text-white">
            Roam in <span className="text-orange-500">Mine, Steel & Power Skill Park</span> & Enjoy{" "}
            <span className="text-orange-500">AR/VR</span>, Simulation & Real-Time Gigantic Machines from{" "}
            <span className="text-orange-500">Australia</span> & <span className="text-orange-500">Japan</span>.
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/academics"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
            >
              Academics
            </Link>
            <Link
              to="/for-nano-contractors"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
            >
              Counseling
            </Link>
            <Link
              to="/job-search-engine"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
            >
              Job Search Engine
            </Link>
          </div>
        </div>

        {/* Slider Section */}
        {/* <div className="lg:w-1/2 hidden lg:flex justify-center items-center animate-fadeIn relative">
          <Slider {...sliderSettings} className="w-full max-w-xl">
            {slides.map((item, index) => (
              <SlideItem key={index} slide={item} />
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

// Inject fade-in animation
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
    will-change: opacity, transform;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default memo(HeroSection);
