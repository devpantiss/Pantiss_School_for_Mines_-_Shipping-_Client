import React, { useEffect, useRef } from "react";

const LifeAtSkillnet: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => console.log("Autoplay failed:", err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 } // Adjust depending on when you want it to start
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <section className="w-full py-12 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section: Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              Life at{" "}
              <span className="block text-orange-500">
                Pantiss School for Mines & Shipping
              </span>
            </h2>
            <p className="text-lg text-gray-50 mb-4">
              At Pantiss School for Mines & Shipping, we prepare the next generation of skilled professionals for the evolving landscape of mining and maritime industries.
            </p>
            <p className="text-lg text-gray-50 mb-4">
              Our curriculum blends hands-on training with cutting-edge technology, focusing on roles such as Welder, Electrician, Dumper Operator, Excavator Operator, and Security Guard.
            </p>
            <p className="text-lg text-gray-50">
              Join a growing network of over 10,000 trained professionals and launch a future-forward career with Pantiss — where technical excellence meets real-world opportunity.
            </p>
          </div>

          {/* Right Section: Video */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full max-w-xl">
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-lg"
                controls
                preload="metadata"
                muted
              >
                <source
                  src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742369429/WhatsApp_Video_2025-03-19_at_12-VEED_qo9hv6.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSkillnet;
