import React from "react";

const testimonials = [
  {
    logo: "https://labournet.in/wp-content/uploads/2022/03/Hindustan_Unilever_Logo-1.png",
    text: `The work delivered by LabourNet has always been par excellence. Our association with LabourNet has only grown stronger over the years and has become an integral part of HUL’s Economic Empowerment work under the Prabhat program. We hope to pursue this relationship in the future too.`,
    name: "Kanikal Pal",
    designation:
      "South Asia Head - Community Investment & Sustainability Programs",
    photo: "https://labournet.in/wp-content/uploads/2022/03/1612287903181-1.jpg",
  },
  {
    logo: "https://labournet.in/wp-content/uploads/2022/03/0-8.png",
    text: `We chose Labournet to ensure smooth roll out of our projects since it engages in effective planning, hires the right resources, assigns accountability, establishes clear communication between various stakeholders and monitors daily progress.`,
    name: "Sarita Bahl",
    designation: "Director - Bayer Foundation India",
    photo: "https://labournet.in/wp-content/uploads/2022/03/1612287903181-1-1.jpg",
  },
  {
    logo: "https://labournet.in/wp-content/uploads/2022/03/Bharat_Petroleum_Logo-1.png",
    text: `I thank the LabourNet for the exemplary work of imparting training in the local language in a very understanding and interactive manner, and the trainers were completely dedicated and involved. I would also recommend LabourNet to other organizations for their training services.`,
    name: "Mahendra Dongre",
    designation: "Marketing Manager - BPCL",
    photo: "https://labournet.in/wp-content/uploads/2022/03/1612287903181-1-1.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trusted by the <span className="text-[#FF6A3D]">Best</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/30 rounded-lg shadow-lg p-6 flex flex-col items-start relative"
            >
              {/* Company Logo */}
              <div className="mb-4">
                <img
                  src={testimonial.logo}
                  alt="Company Logo"
                  className="object-contain"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-50 italic mb-6">"{testimonial.text}"</p>

              {/* User Details */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-200">
                    {testimonial.designation}
                  </p>
                </div>
              </div>

              {/* Quotation Mark Icon */}
              <div className="absolute bottom-4 right-4 text-[#FF6A3D] text-4xl font-bold">
                “
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;