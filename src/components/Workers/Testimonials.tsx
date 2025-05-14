import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Opting for 'On-the-Job' training exposed me to various excellent initiatives which utilized modern technology-based training methods.",
      author: "Puneet Katoch,",
      details: "Relationship Officer – Retail Management, Mandi, HP",
    },
    {
      quote:
        "The Shiksha app cleared all my fears about remote learning. I now take up digital marketing projects.",
      author: "Nihar Nalini Nayak,",
      details: "Khorda Orissa",
    },
    {
      quote:
        "As soon as I completed the operator skilling program, I had a job offer in hand. LabourNet has changed my life.",
      author: "Nasari Sanka,",
      details: "ECOM Express, Hyderabad, Telangana",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-20 lg:px-40">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        Join India's <span className="text-orange-500">largest pool of happy workers</span>
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <p className="italic mb-4">“{testimonial.quote}”</p>
            <div className="mt-auto border-t border-gray-300 pt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16">
        <h3 className="text-lg md:text-2xl font-bold mb-4">Upload Your Resume</h3>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-orange-600 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
