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
        // Allow horizontal scrolling only when inside the component
        if (
          !(scrollLeft === 0 && event.deltaY < 0) && // At the start and scrolling up
          !(scrollLeft + clientWidth === scrollWidth && event.deltaY > 0) // At the end and scrolling down
        ) {
          event.preventDefault(); // Prevent vertical scrolling
          container.scrollBy({
            left: event.deltaY, // Scroll horizontally
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
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/path-to-your-background.jpg")' }}
      ></div>

      {/* Horizontal Scroll Content */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex overflow-x-auto snap-x snap-mandatory z-10"
      >
        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center text-white snap-start">
          <div className="mt-4 w-1/2 h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col justify-center items-center">
            <div className="max-w-lg flex flex-col justify-start items-start">
              <img
                src="https://labournet.in/wp-content/uploads/2021/12/Group-93.png"
                alt="logo"
                className="h-12 w-12"
              />
              <h1 className="text-white mt-2 text-2xl uppercase font-bold">AVAILABLE</h1>
              <p className="text-white max-w-[350px] text-2xl text-left">
                Building supply in{" "}
                <strong className="text-purple-600">350+ schools</strong> and{" "}
                <strong className="text-purple-600">03 colleges,</strong> and
                connecting it to demand in{" "}
                <strong className="text-purple-600">23 states</strong> and{" "}
                <strong className="text-purple-600">5 union territories.</strong>
              </p>
            </div>
          </div>
          <div className="bg-[#D76042] h-screen flex justify-center items-center w-1/2">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/Group-1-1.svg"
              alt="img"
              className="w-64 lg:w-[650px]"
            />
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center text-white snap-start">
          <div className="mt-4 w-1/2 h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col justify-center items-center">
            <div className="max-w-lg flex flex-col justify-start items-start">
              <img
                src="https://labournet.in/wp-content/uploads/2021/12/Home_Reliable_Icon.png"
                alt="logo"
                className="h-12 w-12"
              />
              <h1 className="text-white mt-2 text-2xl uppercase font-bold">Reliable</h1>
              <p className="text-white max-w-[350px] text-2xl text-left">
                <strong className="text-purple-600">12+ years</strong> of work to
                <strong className="text-purple-600">uplift,</strong> informal
                workers,
                <strong className="text-purple-600">grow real wages</strong> and
                enable{" "}
                <strong className="text-purple-600">
                  decent working conditions.
                </strong>
              </p>
            </div>
          </div>
          <div className="bg-[#D76042] h-screen flex justify-center items-center w-1/2">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/Group-209.svg"
              alt="img"
              className="w-64 lg:w-[650px]"
            />
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center text-white snap-start">
          <div className="mt-4 w-1/2 h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col justify-center items-center">
            <div className="max-w-lg flex flex-col justify-start items-start">
              <img
                src="https://labournet.in/wp-content/uploads/2021/12/Home_Innovative_Icon.png"
                alt="logo"
                className="h-12 w-12"
              />
              <h1 className="text-white mt-2 uppercase text-2xl font-bold">INNOVATIVE</h1>
              <p className="text-white max-w-[350px] text-2xl text-left">
                Pioneer in{" "}
                <strong className="text-purple-600">
                  Vocational EdTech, Mobile Micro-learning
                </strong>{" "}
                for Blue-Collar Trades,{" "}
                <strong className="text-purple-600">B2B2C Gig-staffing</strong>{" "}
                and
                <strong className="text-purple-600">WCaaS technology.</strong>
              </p>
            </div>
          </div>
          <div className="bg-[#D76042] h-screen flex justify-center items-center w-1/2">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/Frame-1.svg"
              alt="img"
              className="w-64 lg:w-[650px]"
            />
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center text-white snap-start">
          <div className="mt-4 w-1/2 h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col justify-center items-center">
            <div className="max-w-lg flex flex-col justify-start items-start">
              <img
                src="https://labournet.in/wp-content/uploads/2021/12/Home_Efficient_Icon.png"
                alt="logo"
                className="h-12 w-12"
              />
              <h1 className="text-white mt-2 text-2xl uppercase font-bold">
                Efficient
              </h1>
              <p className="text-white max-w-[350px] text-2xl text-left">
                Models built for{" "}
                <strong className="text-purple-600">cost resilience</strong> and{" "}
                <strong className="text-purple-600">capital efficiency.</strong>
              </p>
            </div>
          </div>
          <div className="bg-[#D76042] h-screen flex justify-center items-center w-1/2">
            <img
              src="https://labournet.in/wp-content/uploads/2022/01/Group-213.svg"
              alt="img"
              className="w-64 lg:w-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;
