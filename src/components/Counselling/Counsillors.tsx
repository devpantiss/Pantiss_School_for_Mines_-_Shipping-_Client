// components/CounsellorSection.tsx

const counsellors = [
    {
      name: "Vandana Garg",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739299857/WhatsApp_Image_2025-02-12_at_12.17.30_AM_vs1erc.jpg", // Replace with your actual path
      experience: "5+ Yrs of Experience in Career Guidance.",
      credentials: [
        "Certified Career Coach by NCDA.",
        "Expert in Parenting Guidance.",
        "Proficient in Parenting Guidance.",
        "Masters in Public Administration.",
        "Languages: English & Hindi"
      ]
    },
    {
      name: "Hymavathi Garuda",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771766/WhatsApp_Image_2025-02-13_at_1.52.50_PM_1_npx2n9.jpg",
      experience: "4+ Yrs of Experience in Career Guidance.",
      credentials: [
        "Certified Career Coach by NCDA.",
        "Expert in Student & Parenting guidance",
        "Counseling Psychologist",
        "Masters in Psychology & International Business",
        "Languages: English, Telugu & Hindi"
      ]
    },
    {
      name: "Renuka Bhuta",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771766/WhatsApp_Image_2025-02-13_at_1.52.50_PM_h2o6vf.jpg",
      experience: "4+ Yrs of Experience in Career Guidance.",
      credentials: [
        "Certified Career Coach by UCLA Extn California, USA",
        "Expert in Student, Professional & Vocational guidance",
        "Experienced in Educational Content Creation and Research",
        "Bachelor’s in Commerce, Diploma in Airline and Travel Management",
        "Languages: English, Hindi & Gujarati"
      ]
    }
  ];
  
  export default function Counsillors() {
    return (
      <section className="bg-gradient-to-b from-black via-purple-900 to-black py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-4xl font-bold text-left text-gray-100 mb-4">
            Meet Our Dedicated Team Of <span className="text-orange-500">Counsellors</span>
          </h2>
          <p className="text-gray-50 text-left mx-auto mb-12">
            With years of experience and a passion for guiding individuals towards success, our Counsellors are here to support you on your career journey. Let our counsellors be your trusted companions as you strive towards your career goals.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {counsellors.map((counsellor, idx) => (
              <div
                key={idx}
                className="bg-white/40 ring-2 ring-orange-500 rounded-3xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center p-6"
              >
                <div className="bg-orange-600 w-full h-20 rounded-t-3xl relative flex justify-center">
                  <img
                    src={counsellor.image}
                    alt={counsellor.name}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover absolute -bottom-12"
                  />
                </div>
                <div className="mt-16">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {counsellor.name}
                  </h3>
                  <ul className="text-sm text-gray-100 space-y-2 border-t pt-4">
                    <li className="font-medium">{counsellor.experience}</li>
                    {counsellor.credentials.map((item, i) => (
                      <li key={i} className="border-t pt-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  