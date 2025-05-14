import React from "react";

interface Testimonial {
  name: string;
  location: string;
  message: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Suraj Pathak",
      location: "Bangalore",
      message:
        "LabourNet helped me grow my team with 33 well-trained workers, got me new projects, and trained me on managing them better as well.",
      image: "https://labournet.in/wp-content/uploads/2022/03/Ellipse-11.png", // Replace with actual image URL
    },
    {
      name: "Sahidul Islam",
      location: "Bangalore",
      message:
        "Thanks to LabourNet, my team is larger by 17 well-trained people and I’ve received a good contract opportunity.",
      image: "https://labournet.in/wp-content/uploads/2022/03/Ellipse-11-1.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-black py-12">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-gray-50 mb-8">
        <span className="text-purple-500">Nano-contractors</span> testimonials
      </h2>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100/50 rounded-lg shadow-md p-6 max-w-md"
          >
            <p className="text-gray-50 italic mb-6">"{testimonial.message}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-100">{testimonial.name}</p>
                <p className="text-gray-50 text-sm">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-50">Start Growing</h3>
        <button className="bg-purple-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-purple-600">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
