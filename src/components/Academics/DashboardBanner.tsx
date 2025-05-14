import React from "react";
import { FaChartLine, FaUserGraduate, FaClipboardList } from "react-icons/fa";

const DashboardBanner: React.FC = () => {
  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="dashboard-parallax-bg absolute inset-0 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Track, Analyze, Succeed with <span className="text-orange-600">MineFlow Dashboard</span>
          </h1>
          <p className="text-lg mb-6">
            Gain deep insights into learner progress, course effectiveness, and engagement — all in one powerful dashboard.
          </p>
          <button className="bg-purple-600 hover:bg-purple-300 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Dashboard
          </button>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-black/30 ring-2 ring-orange-500 p-6 rounded-lg">
            <FaChartLine size={32} className="mx-auto text-purple-400 mb-2" />
            <p className="font-semibold">Performance Analytics</p>
          </div>
          <div className="bg-black/20 ring-2 ring-orange-500 p-6 rounded-lg">
            <FaUserGraduate size={32} className="mx-auto text-purple-400 mb-2" />
            <p className="font-semibold">Student Insights</p>
          </div>
          <div className="bg-black/20 ring-2 ring-orange-500 p-6 rounded-lg">
            <FaClipboardList size={32} className="mx-auto text-purple-400 mb-2" />
            <p className="font-semibold">Course Completion Reports</p>
          </div>
        </div>
      </div>

      {/* Custom Parallax CSS */}
      <style>{`
        .dashboard-parallax-bg {
          background-image: url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746183903/Pngtree_futuristic_data_analytics_dashboard_15585353_lodtro.jpg');
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default DashboardBanner;
