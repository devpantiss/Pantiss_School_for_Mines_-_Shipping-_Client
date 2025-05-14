import React, { useRef, useEffect } from "react";

const HorizontalScrollComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const isHorizontalScroll = container.scrollWidth > container.clientWidth;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (isHorizontalScroll) {
        if (
          !(scrollLeft === 0 && event.deltaY < 0) &&
          !(scrollLeft + clientWidth === scrollWidth && event.deltaY > 0)
        ) {
          event.preventDefault();
          container.scrollBy({
            left: event.deltaY,
            behavior: "smooth",
          });
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="relative w-screen h-[90vh] overflow-hidden bg-black py-8 px-6">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994020/2759477-uhd_3840_2160_30fps_zxnpip.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/30 to-black bg-opacity-30 z-0"></div>

      {/* Heading with Higher z-index */}
      <h1 className="relative text-4xl lg:ml-[200px] lg:max-w-[300px] max-w-full text-white font-bold z-20">
        <p className="text-purple-600">Four ways</p> to hire top talent with SkillNet
      </h1>

      {/* Horizontal Scroll Content */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex overflow-x-auto snap-x snap-mandatory py-6 z-10"
      >
        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/Group-671.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Source Elite Talent
              </h1>
              <p className="text-orange-400">
                across industries and geographies
              </p>
              <ul className="list-disc text-left mt-2">
                <li>Access to pre-vetted professionals</li>
                <li>AI-driven talent matching</li>
                <li>Multi-sector expertise</li>
                <li>Rapid candidate shortlisting</li>
                <li>Scalable hiring solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/SkillAssess-1.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Assess with Precision
              </h1>
              <p className="text-orange-400">
                using cutting-edge evaluation tools
              </p>
              <ul className="list-disc text-left mt-2">
                <li>Skill-based assessments</li>
                <li>AI-proctored technical tests</li>
                <li>Behavioral and aptitude evaluations</li>
                <li>Customizable screening processes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/EngageTeam-1.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Engage Top Candidates
              </h1>
              <p className="text-orange-400">with seamless interaction</p>
              <ul className="list-disc text-left mt-2">
                <li>Automated interview scheduling</li>
                <li>Real-time candidate feedback</li>
                <li>Personalized engagement tools</li>
                <li>Talent pipeline management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/GetWorkDone-1.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Hire with Confidence
              </h1>
              <p className="text-orange-400">
                backed by data-driven insights
              </p>
              <ul className="list-disc text-left mt-2">
                <li>Comprehensive candidate analytics</li>
                <li>Performance prediction models</li>
                <li>Streamlined onboarding support</li>
                <li>Guaranteed fit for your business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;