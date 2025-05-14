import React from "react";

const QualityBanner: React.FC = () => {
  return (
    <section className="relative flex flex-wrap md:flex-nowrap text-white p-8 md:p-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994000/16498883-hd_1920_1080_24fps_zb7mxr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative md:w-2/3 space-y-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          A legacy built on <br />
          <span className="text-white">quality and trust</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Institution of Eminence</h3>
            <p className="text-sm">
              Status by Ministry of Education, Government of India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">4th Best University in India</h3>
            <p className="text-sm">(NIRF 2024)</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">NAAC A++ Accreditation</h3>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Ranked 1st</h3>
            <p className="text-sm">
              Amongst top 40 deemed to be universities 2024 (Outlook)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Ranked 7th</h3>
            <p className="text-sm">
              Scimago Institutions Ranking - 2024 (in India under university
              category)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Ranked 195th</h3>
            <p className="text-sm">QS Asia University Ranking - 2025</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Ranked 20th</h3>
            <p className="text-sm">IIRF Ranking 2024</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Ranked 23rd</h3>
            <p className="text-sm">In research category (NIRF 2024)</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative md:w-1/3 flex justify-center z-10">
        <img
          src="https://labournet.in/wp-content/uploads/2021/12/HomeBanner_warehouseManager_LowRes-2-1.png"
          alt="Student with Book"
          className="w-full max-w-xs md:max-w-sm rounded-lg"
        />
      </div>

      {/* Floating Apply Now Button */}
      {/* <a
        href="#apply"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white font-bold py-2 px-4 rounded-l-lg rotate-90 z-20"
      >
        Apply Now
      </a> */}
    </section>
  );
};

export default QualityBanner;
