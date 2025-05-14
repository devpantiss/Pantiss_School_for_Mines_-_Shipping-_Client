import React from "react";

const BusinessPromotionalBanner: React.FC = () => {
  return (
    <section
      className="relative h-[500px] overflow-hidden"
      aria-label="Promotional Banner for Blue-Collar Hiring"
    >
      {/* Parallax Background using bg-fixed */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          Hire Skilled Blue-Collar Talent Today
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6 animate-fade-in-delayed">
          Connect with verified, reliable workers for your business needs. From mechanics to delivery drivers, find the right talent fast with our streamlined platform.
        </p>
        <button
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 focus:ring-4 focus:ring-purple-600/50 transition-all transform hover:scale-105"
          aria-label="Get Started with Hiring"
        >
          Get Started
        </button>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          opacity: 0;
          animation: fade-in 1s ease-out 0.3s forwards;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessPromotionalBanner;
