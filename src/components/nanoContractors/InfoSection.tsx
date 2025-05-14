import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] bg-purple-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 md:text-4xl">
            Growth can be <br />
            <span className="text-white">quicker and easier.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            The <span className="font-semibold text-white">top companies</span> and the{" "}
            <span className="font-semibold text-white">best workers</span> in India have
            something in <span className="font-semibold text-white">common</span> – they
            work with <span className="font-semibold text-orange-500">LabourNet</span>.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Whether you’re looking for your next project or trying to{" "}
            <span className="font-semibold text-white">grow your team</span>, LabourNet will
            help you get to work.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            We’ll help you{" "}
            <span className="font-semibold text-white">find the work</span>,{" "}
            <span className="font-semibold text-white">build your team</span>, and{" "}
            <span className="font-semibold text-white">engage workers</span>.
          </p>
          <p className="mt-4 text-lg font-semibold text-orange-500">
            You focus on delivering.
          </p>
        </div>

        {/* Decorative Figure */}
        <div className="mt-12 absolute bottom-0 right-[20%] ">
          <img
            src="https://labournet.in/wp-content/uploads/2022/01/Group-331.png"
            alt="Decorative Graphic"
            className="lg:block hidden w-24 md:w-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
