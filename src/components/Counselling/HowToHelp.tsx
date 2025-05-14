import { FaChalkboardTeacher, FaClipboardList, FaPeopleArrows } from "react-icons/fa";

export default function HowToHelp() {
  return (
    <section className="relative w-full h-auto py-16 px-6 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490663/12266398_1920_1080_30fps_njenhk.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/20 to-black z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-gray-50 mb-14">
          How We Can <span className="text-orange-500">Help?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-50/50 ring-2 ring-orange-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow mb-4">
              <FaChalkboardTeacher className="text-2xl text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Career Coaching</h3>
            <p className="text-sm text-gray-100">
              Our personalised Career Counselling for Working Professionals is aimed to guide them in their career development journey. Here is how MentorMe can help you achieve your professional goals.
            </p>
          </div>

          <div className="bg-purple-50/50 ring-2 ring-orange-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow mb-4">
              <FaClipboardList className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Career Action Plan</h3>
            <p className="text-sm text-gray-100">
              Our Career coaches help in setting clear, achievable career goals and developing action plans to attain them. They help in breaking down long-term objectives into manageable steps, outlining specific actions, timelines, and resources required for success.
            </p>
          </div>

          <div className="bg-blue-50/50 ring-2 ring-orange-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow mb-4">
              <FaPeopleArrows className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Career Transition Support</h3>
            <p className="text-sm text-gray-100">
              For individuals navigating career transitions, our career coaches provide tailored support and guidance. We help you explore alternative career paths and develop strategies for transitioning smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
