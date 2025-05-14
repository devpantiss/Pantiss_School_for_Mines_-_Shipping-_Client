import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is career counselling in the mining sector?",
    answer:
      "Career counselling in mining helps individuals understand the skills, certifications, and opportunities required for roles like Electrician, Welder, and Mining Operator.",
  },
  {
    id: 2,
    question: "What qualifications are needed for a blue-collar mining job?",
    answer:
      "Typically, ITI or diploma in trades like electrical, welding, or machinery operation is required. Counselling can help you pick the right path.",
  },
  {
    id: 3,
    question: "When should I start planning my career in mining?",
    answer:
      "Starting early—around Class 9 or 10—helps in selecting the right technical stream and preparing for certifications.",
  },
  {
    id: 4,
    question: "Can I switch trades once I’ve started working?",
    answer:
      "Yes, with proper upskilling and mentorship, career mobility between trades like operator to supervisor is achievable.",
  },
  {
    id: 5,
    question: "How does counselling help in job placement?",
    answer:
      "Counsellors connect you with training programs, prepare you for interviews, and help build resumes tailored to mining employers.",
  },
  {
    id: 6,
    question: "What is a trade assessment test?",
    answer:
      "It helps evaluate your aptitude and suitability for specific mining trades like electrical work or welding.",
  },
  {
    id: 7,
    question: "Can families be part of the counselling process?",
    answer:
      "Absolutely. For school students and early learners, parental involvement ensures better decision-making and support.",
  },
  {
    id: 8,
    question: "Do you offer training or only counselling?",
    answer:
      "Both. We offer a complete roadmap—counselling, hands-on training, certification, and placement assistance.",
  },
  {
    id: 9,
    question: "Is counselling available online?",
    answer:
      "Yes, sessions can be held virtually or in-person based on your preference and availability.",
  },
  {
    id: 10,
    question: "Where can I find resources to prepare for a mining career?",
    answer:
      "Our platform offers curated courses, safety guides, trade books, and mentorship access for mining careers.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: { id: number; question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md bg-white/20 ring-2 ring-orange-500">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-50 bg-white/40  hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        <span className="text-base font-semibold">
          {faq.id}. {faq.question}
        </span>
        {isOpen ? (
          <FaChevronUp className="w-5 h-5 text-orange-500" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-orange-500" />
        )}
      </button>
      <div
        id={`faq-${faq.id}`}
        className={`px-6 text-gray-700 text-sm bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-50 mb-14">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap gap-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="w-full md:w-[48%]">
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
