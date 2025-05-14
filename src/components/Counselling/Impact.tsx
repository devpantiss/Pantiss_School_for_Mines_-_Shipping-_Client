
export default function Impact() {
  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-left text-gray-50 mb-12">
          Our <span className="text-orange-500">Training</span> Programs
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">
              MentorMe: Upskilling Students For Success
            </h3>
            <p className="text-sm text-gray-100 mb-4">
              At MentorMe, we’re dedicated to unlocking the potential of every student through a
              diverse array of courses and programs designed to enhance academic performance,
              job-ready skills, and confidence. Our experienced trainers employ innovative
              teaching methods such as case studies, simulations, and gamification to ensure
              effective learning and retention.
            </p>
            <p className="text-sm text-gray-100">
              Whether it’s technical training or leadership development, we offer a wide range of
              learning options, from facilitator-led sessions to self-paced courses, tailored to
              meet the specific needs and schedules of each team.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679033/pilmo-kang-H72SCCTZPE8-unsplash_ru8urx.jpg"
              alt="Training session"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 text-center text-white">
          <div className="bg-white/30 ring-2 ring-orange-500 rounded-lg py-6">
            <p className="text-3xl font-bold">20+</p>
            <p className="mt-2 text-sm">Clients</p>
          </div>
          <div className="bg-white/30 ring-2 ring-orange-500 rounded-lg py-6">
            <p className="text-3xl font-bold">25+</p>
            <p className="mt-2 text-sm">Specialised Programs</p>
          </div>
          <div className="bg-white/30 ring-2 ring-orange-500 rounded-lg py-6">
            <p className="text-3xl font-bold">60+</p>
            <p className="mt-2 text-sm">Expert Trainers</p>
          </div>
          <div className="bg-white/30 ring-2 ring-orange-500 rounded-lg py-6">
            <p className="text-3xl font-bold">20000+</p>
            <p className="mt-2 text-sm">Students Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
