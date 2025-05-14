import React, { useRef } from "react";

const benefits = [
  {
    title: "SkillNet Training Academy",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743492399/training_q9hji1.jpg",
  },
  {
    title: "Certifications & Career Growth",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743492400/business-man-8429442_1920_1_attorm.jpg",
  },
  {
    title: "Diversity & Equal Opportunities",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743492528/Screenshot_2025-04-01_at_12.55.20_PM_ieqcax.png",
  },
  {
    title: "Industry Insights & Trends",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743492401/technology-hologram-indoors_kmqw4p.jpg",
  },
];

const Why: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 text-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490676/12900822_1920_1080_30fps_ldejrt.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black bg-opacity-30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title & Description */}
        <h2 className="text-4xl font-bold text-white text-transparent  mb-6">
          Why Choose <span className="text-purple-600">SkillNet?</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
          SkillNet is committed to providing cutting-edge training, career advancement, and an inclusive environment. Discover why professionals trust us.
        </p>

        {/* Horizontal Scrollable Cards */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 z-50 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition"
          >
            ◀
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 z-50 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition"
          >
            ▶
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth snap-x scrollbar-hide p-6"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative w-72 h-96 flex-shrink-0 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-600/50 snap-center"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${benefit.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 hover:opacity-50 transition-all"></div>

                {/* Card Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold">{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
