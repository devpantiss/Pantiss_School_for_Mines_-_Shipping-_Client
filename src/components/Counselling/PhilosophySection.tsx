import { FaLeaf, FaDumbbell, FaLightbulb, FaBullseye } from "react-icons/fa";

export default function PhilosophySection() {
  const cards = [
    {
      icon: <FaLeaf className="text-white text-4xl" />,
      title: "Our Philosophy",
      content:
        "A fulfilling career is within reach for everyone. By exploring strengths, interests, and values with expert guidance, you can unlock your potential and achieve lasting satisfaction.",
    },
    {
      icon: <FaDumbbell className="text-white text-4xl" />,
      title: "Our Strengths",
      content:
        "We provide holistic career development through expert counselling, personalized assessments, and a strategic roadmap tailored to your growth.",
    },
    {
      icon: <FaLightbulb className="text-white text-4xl" />,
      title: "Our Vision",
      content:
        "We aim to empower individuals to make informed career decisions. Our vision bridges the gap between aspirations and accomplishments through effective tools.",
    },
    {
      icon: <FaBullseye className="text-white text-4xl" />,
      title: "Our Mission",
      content:
        "We guide individuals through a dynamic career journey, equipping them with confidence, skills, and insights to reach meaningful professional success.",
    },
  ];

  return (
    <section className="relative overflow-hidden text-white lg:h-[70vh] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490672/11821715-uhd_3840_2160_60fps_f0okcz.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg hover:shadow-xl ring-2 ring-orange-500 transition-shadow duration-300 bg-gradient-to-b from-purple-700/70 to-purple-900/40 flex flex-col h-full"
            >
              <div className="flex items-center justify-center h-32">
                {card.icon}
              </div>
              <div className="bg-white/50 text-white rounded-b-2xl p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-justify leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
