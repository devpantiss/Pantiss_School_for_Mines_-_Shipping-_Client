export default function CounsellingServices() {
    const services = [
      {
        title: "Mining Stream & Course Selection",
        description:
          "Get expert guidance on choosing the right vocational path, mining trade, or certification aligned with your interests and skills.",
        icon: "🪨",
        bg: "bg-blue-100",
      },
      {
        title: "Career Counselling",
        description:
          "One-on-one counselling sessions tailored to help you understand various blue-collar career paths in the mining industry.",
        icon: "🧠",
        bg: "bg-white",
      },
      {
        title: "Hands-on Skill Training",
        description:
          "Practical skill development with real-world training by industry veterans, using modern mining tools and techniques.",
        icon: "⛏️",
        bg: "bg-white",
      },
      {
        title: "Career Assessment",
        description:
          "Assess your strengths, work-style preferences, and suitability for different roles like drilling, machine operation, or safety inspection.",
        icon: "📊",
        bg: "bg-white",
      },
      {
        title: "Placement Support",
        description:
          "Connect with reputed mining companies, contractors, and government job boards for internships and full-time roles.",
        icon: "📌",
        bg: "bg-white",
      },
    ];
  
    return (
      <section className="bg-gradient-to-b from-black via-purple-900 to-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-50">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-100 mb-10 max-w-2xl">
            We offer a full suite of services—from skill discovery to job placement—designed to help students launch fulfilling blue-collar careers in the mining industry.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-sm p-6 bg-transparent ring-2 ring-orange-500 flex items-start space-x-4`}
              >
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-50">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 text-sm mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  