export default function ChooseYourPath() {
    return (
      <section className="bg-gradient-to-b from-black via-purple-900 to-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-50 text-left">
              Why <span className="text-orange-500">Choose MiningPath?</span>
            </h2>
            <p className="text-gray-100 mt-4 text-left">
              From classroom to coalface, we provide a step-by-step roadmap to
              launch your career as a Mining Electrician, Welder, or Equipment
              Operator—equipping you with practical skills, mentorship, and
              job-ready confidence.
            </p>
          </div>
  
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Left Boxes */}
            <div className="flex flex-col gap-6 w-full max-w-sm">
              {miningCareerData.slice(0, 2).map((section, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-5 bg-white/40 ring-2 ring-orange-500"
                >
                  <h3 className="font-semibold text-white mb-2">
                    {section.title}{" "}
                    <span className="text-orange-500">({section.target})</span>
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-100 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
  
            {/* Rotating SVG Circle with Image Quadrants */}
            <div className="relative w-[450px] h-[450px] flex-shrink-0">
              <svg
                className="absolute top-0 left-0 w-full h-full animate-spin-slow"
                viewBox="0 0 450 450"
              >
                <defs>
                  <pattern id="bg1" patternUnits="userSpaceOnUse" width="450" height="450">
                    <image href="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679034/ali-mkumbwa-Annl9CjEaEs-unsplash_zihcem.jpg" x="0" y="0" width="450" height="450" preserveAspectRatio="xMidYMid slice" />
                  </pattern>
                  <pattern id="bg2" patternUnits="userSpaceOnUse" width="450" height="450">
                    <image href="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679033/shahnawaz-shamim-rbiknJHleHI-unsplash_jt41sl.jpg" x="0" y="0" width="450" height="450" preserveAspectRatio="xMidYMid slice" />
                  </pattern>
                  <pattern id="bg3" patternUnits="userSpaceOnUse" width="450" height="450">
                    <image href="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679032/ant-rozetsky-_qWeqqmpBpU-unsplash_g46bga.jpg" x="0" y="0" width="450" height="450" preserveAspectRatio="xMidYMid slice" />
                  </pattern>
                  <pattern id="bg4" patternUnits="userSpaceOnUse" width="450" height="450">
                    <image href="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743492399/training_q9hji1.jpg" x="0" y="0" width="450" height="450" preserveAspectRatio="xMidYMid slice" />
                  </pattern>
  
                  <path id="path1" d="M225,25 A200,200 0 0,1 425,225" fill="none" />
                  <path id="path2" d="M425,225 A200,200 0 0,1 225,425" fill="none" />
                  <path id="path3" d="M225,425 A200,200 0 0,1 25,225" fill="none" />
                  <path id="path4" d="M25,225 A200,200 0 0,1 225,25" fill="none" />
                </defs>
  
                {/* Image Quadrants */}
                <path d="M225,225 L225,25 A200,200 0 0,1 425,225 Z" fill="url(#bg1)" />
                <path d="M225,225 L425,225 A200,200 0 0,1 225,425 Z" fill="url(#bg2)" />
                <path d="M225,225 L225,425 A200,200 0 0,1 25,225 Z" fill="url(#bg3)" />
                <path d="M225,225 L25,225 A200,200 0 0,1 225,25 Z" fill="url(#bg4)" />
  
                {/* Circle Outline */}
                <circle
                  cx="225"
                  cy="225"
                  r="200"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                />
  
                {/* Separators */}
                <line x1="225" y1="25" x2="225" y2="425" stroke="white" strokeWidth="3" />
                <line x1="25" y1="225" x2="425" y2="225" stroke="white" strokeWidth="3" />
  
                {/* Curved Labels */}
                {miningCareerData.map((section, index) => (
                  <text
                    key={index}
                    fill="white"
                    fontSize="29"
                    fontWeight="bold"
                    letterSpacing="1"
                  >
                    <textPath
                      href={`#path${index + 1}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {section.title}
                    </textPath>
                  </text>
                ))}
              </svg>
            </div>
  
            {/* Right Boxes */}
            <div className="flex flex-col gap-6 w-full max-w-sm">
              {miningCareerData.slice(2, 4).map((section, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-5 bg-white/40 ring-2 ring-orange-500"
                >
                  <h3 className="font-semibold text-gray-100 mb-2">
                    {section.title}{" "}
                    <span className="text-orange-500">({section.target})</span>
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-100 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Styles */}
        <style>{`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin 30s linear infinite;
            transform-origin: center;
          }
        `}</style>
      </section>
    );
  }
  
  // Career Path Data
  const miningCareerData = [
    {
      title: "Early Exploration",
      target: "Class 6–8",
      items: [
        "Introduction to Mining Trades (Electrician, Welder, Operator)",
        "Workshops on basic tools, safety, and energy concepts",
        "Hands-on project simulations (DIY electrical kits, welding demos)",
        "Career exposure sessions with real-life mining professionals",
      ],
    },
    {
      title: "Skill Discovery",
      target: "Class 9–12",
      items: [
        "Career mapping for ITI, diploma & apprenticeship tracks",
        "Skill & aptitude assessments for mining-specific roles",
        "Guidance on trade certifications (e.g. Electrician, Fitter, Welder)",
        "Support for government entrance exams and PSUs",
      ],
    },
    {
      title: "Job Readiness",
      target: "College Students",
      items: [
        "Advanced counselling on trade specialization (e.g., MIG welding, heavy machinery ops)",
        "Preparation for interviews in mining companies and public sector",
        "Hands-on training in industrial-grade environments",
        "Placement support with contractors & mining organizations",
      ],
    },
    {
      title: "Career Advancement",
      target: "Working Professionals",
      items: [
        "Skill upgradation for latest tools, safety protocols & certifications",
        "Support for career transitions (e.g., Operator → Supervisor)",
        "Mentorship for overseas or government mining roles",
        "Resume, interview, and job placement assistance across mining hubs",
      ],
    },
  ];
  