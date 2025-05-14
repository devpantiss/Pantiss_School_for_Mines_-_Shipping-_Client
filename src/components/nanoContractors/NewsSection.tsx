import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative w-full max-w-xs mx-auto overflow-hidden rounded-lg bg-white/20 shadow-md h-[500px] transition-all duration-300 hover:shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="relative z-10 p-6">
        <h3 className="text-lg font-semibold max-w-lg text-white group-hover:text-white">
          {title}
        </h3>
        <p className="mt-4 text-sm text-white group-hover:text-white">
          {description}
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:text-white"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  const cards = [
    {
      title: "Odisha Mining Expo 2025 Highlights Job Opportunities",
      description:
        "The third Odisha Mining and Infrastructure International Expo 2025 emphasized sustainable mining, with Governor Hari Babu Kambhampati noting the sector's role in driving employment. The event showcased new job opportunities for skilled workers in Odisha’s mineral-rich regions.",
      imageUrl:
        "https://labournet.in/wp-content/uploads/2021/12/bengaluru-CAC-Vaccination-camp-CAC-Dec2021-800x438-1.jpg",
    },
    {
      title: "DMF Funds to Boost Employment in Mining Areas",
      description:
        "Odisha’s cabinet approved using District Mineral Foundation funds in a 5 km radius of mining areas, aiming to create jobs and improve livelihoods for families affected by mining, with a focus on comprehensive welfare and employment initiatives.",
      imageUrl:
        "https://labournet.in/wp-content/uploads/2021/12/Rectangle-65.jpg",
    },
    {
      title: "Odisha Budget 2025-26 Targets Mining Sector Growth",
      description:
        "The 2025-26 Odisha Budget, presented by CM Mohan Majhi, allocates funds to strengthen the mining sector, aiming to create more placements and support infrastructure development, with a focus on sustainable growth and job creation.",
      imageUrl:
        "https://labournet.in/wp-content/uploads/2021/12/BL08BSYediyurappa02jpg.jpg",
    },
  ];

  return (
    <section className="relative py-10 flex flex-col justify-center items-center bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742993943/12791129_1920_1080_30fps_ifof9j.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative text-center mb-6">
        <h2 className="text-xl font-bold text-gray-50">News</h2>
      </div>
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection
