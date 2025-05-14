import { FaChartLine, FaBookOpen } from "react-icons/fa";

export default function AssessmentSection() {
  return (
    <section className="relative w-full h-auto py-12 px-4 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994000/16498883-hd_1920_1080_24fps_zb7mxr.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-xl md:text-2xl text-left font-semibold mb-6">
          THIS ASSESSMENT IS YOUR FIRST STEP TOWARDS CREATING A
          <br />
          <span className="text-orange-500 text-2xl md:text-3xl font-bold">
            FULFILLING AND SUCCESSFUL CAREER PATH
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white/40 text-gray-50 ring-2 ring-orange-500 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="text-orange-500 text-4xl">
              <FaChartLine />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Career Compass Evaluation</h3>
              <p className="text-sm text-gray-100 mb-4">
                The results of our Career Assessment would be a comprehensive analysis of your
                Passion exploration, Individuality Profiling, and Skill Proficiency. Our report equips
                you with a plethora of career recommendations specially crafted to resonate with your
                skills, interests, and values.
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/40 text-gray-50 ring-2 ring-orange-500  rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="text-orange-500 text-4xl">
              <FaBookOpen />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Career Library</h3>
              <p className="text-sm text-gray-100 mb-4">
                Learn more about the career recommendations included in your Career Compass Evaluation
                with our comprehensive Career Library. Our Career Library is a one-stop resource for
                in-depth exploration of various career paths.
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
