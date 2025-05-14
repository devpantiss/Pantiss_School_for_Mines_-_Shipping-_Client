import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// Define the Program interface for TypeScript
interface Program {
  title: string;
  image: string;
  categories: string[];
  link: string;
  description: string;
}

// Memoized static programs data
const programs: Program[] = [
  {
    title: "Skill Candor",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316784/freepik__the-style-is-candid-image-photography-with-natural__18031_exrhs0.jpg",
    categories: ["Skill Development", "Training"],
    link: "/what-we-do/skill-candor",
    description: "Boost your career with industry-relevant skill development programs."
  },
  {
    title: "Skill Mobilizers Connect",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316572/freepik__make-a-image-showing-an-mobile-phone-inside-which-__18030_xe1ihz.jpg",
    categories: ["Networking", "Career Growth"],
    link: "/what-we-do/skill-mobilizers-connect",
    description: "Connect with top skill mobilizers to accelerate your professional journey."
  },
  {
    title: "Skill Cafe",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1745670985/Flux_Dev_A_bustling_skills_cafe_in_Odisha_where_a_group_of_div_0_sjkpww.jpg",
    categories: ["Learning Hub", "Community"],
    link: "/what-we-do/skill-cafe",
    description: "A vibrant hub to learn, collaborate, and grow your expertise."
  },
  {
    title: "Blue Collars Foundry",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp",
    categories: ["Blue Collar Skills", "Workforce Training"],
    link: "/what-we-do/blue-collars-foundry",
    description: "Empowering the blue-collar workforce with cutting-edge training."
  },
];


// Memoized ProgramCard component with TypeScript props
interface ProgramCardProps {
  program: Program;
}

const ProgramCard = memo(
  ({ program }: ProgramCardProps) => {
    return (
      <div className="flex flex-col h-full">
        <Link
          to={program.link}
          className="relative bg-black h-[400px] ring-2 ring-white rounded-t-lg shadow-lg overflow-hidden group [will-change:transform] focus:outline-none focus:ring-4 focus:ring-purple-500"
          tabIndex={0}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${program.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={program.image}
              alt={`${program.title} background`}
              className="w-full h-full object-cover opacity-0"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent group-focus:bg-transparent transition-opacity duration-300 ease-in-out [will-change:opacity]"></div>

          {/* Categories */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {program.categories.map((category, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-purple-600 bg-opacity-90 text-white text-xs font-medium rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title and Line */}
          <div className="absolute bottom-6 left-6 right-6 text-white group-hover:text-purple-600 group-focus:text-purple-600 transition-colors duration-300 ease-in-out z-10">
            <hr className="border-t border-4 border-white/80 mb-3 w-12 group-hover:border-purple-600 group-focus:border-purple-600 transition-colors duration-300 ease-in-out [will-change:border-color]" />
            <h3 className="text-start text-2xl md:text-3xl font-semibold leading-tight">
              {program.title}
            </h3>
          </div>
        </Link>

        {/* Description Box */}
        <div className="bg-white text-black p-4 ring-2 ring-white rounded-b-lg flex-1">
          <p className="text-sm font-medium">{program.description}</p>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.program.link === nextProps.program.link
);
ProgramCard.displayName = "ProgramCard";


const Programs: React.FC = () => {
  // Memoized programs array
  const programList = useMemo(() => programs, []);

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl font-bold">
            OUR <span className="text-orange-600">PRODUCTS</span>
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {programList.map((program) => (
            <ProgramCard key={program.link} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Programs, () => true);