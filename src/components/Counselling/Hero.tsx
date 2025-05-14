export default function Hero() {
    return (
      <section className="relative h-[80vh] flex items-center justify-center mt-20 overflow-hidden text-white">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1744354359/366730695789617155_ydzplz.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
  
        {/* Foreground Content */}
        <div className="relative z-20 px-6 py-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build a Strong Future in the Mining Industry
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Your career in the mining sector starts here. We guide students to meaningful blue-collar opportunities—offering skill-based growth, job placement support, and career mentorship tailored for the future of mining.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-2xl transition">
                Get Career Guidance
              </button>
              <button className="border border-gray-400 hover:border-white text-white py-3 px-6 rounded-2xl transition">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Hero Image or Illustration */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/187/187541.png"
              alt="Mining Career Illustration"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </section>
    );
  }
  