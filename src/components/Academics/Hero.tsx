import React, { useState, FormEvent } from "react";

// Define the form data type for mining job roles
interface FormData {
  candidateName: string;
  email: string;
  phoneNumber: string;
  pincode: string;
  state: string;
  city: string;
  jobRole: string;
  experienceLevel: string;
  preferredLocation: string;
  captcha: string;
}

const HeroSection: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    candidateName: "",
    email: "",
    phoneNumber: "",
    pincode: "",
    state: "",
    city: "",
    jobRole: "",
    experienceLevel: "",
    preferredLocation: "",
    captcha: "",
  });

  // State for form submission
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <section className="relative w-full py-6 mt-12 overflow-hidden">
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742998746/4474927-uhd_3840_2160_30fps_v7ypop.mp4" // Replace with a mining-related video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 py-8 lg:px-16">
        {/* Left Section: Text and CTA */}
        <div className="text-white lg:w-1/2 w-full p-4">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-wrap">
Pantiss School for Mines & Shipping          </h1>
          <p className="text-2xl lg:text-3xl mt-4">
            Powering the Mining Industry
          </p>
          <p className="text-xl lg:text-2xl mt-2">
          Step into a rewarding career as a Welder, Electrician, Dumper Operator, Excavator Operator, or Security Guard — where skill meets opportunity and growth begins.          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Apply Now
          </button>
        </div>

        {/* Right Section: Registration Form */}
        <div className="bg-white/40 p-6 rounded-lg shadow-lg lg:w-1/2 w-full mt-8 lg:mt-0">
          <h2 className="text-2xl  text-white font-bold mb-4">Welcome!</h2>
          <p className="text-sm text-gray-100 mb-4">
            Please fill the form to join Pantiss School for Mines & Shipping.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleInputChange}
                placeholder="Candidate Name*"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address*"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="p-2 border text-white rounded-md">+91</span>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number*"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="Pincode*"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State*"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City*"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <select
                name="jobRole"
                value={formData.jobRole}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Job Role*</option>
                <option value="Welder">Welder</option>
                <option value="Electrician">Electrician</option>
                <option value="Dumper Operator">Dumper Operator</option>
                <option value="Excavator Operator">Excavator Operator</option>
                <option value="Security Guard">Security Guard</option>
              </select>
            </div>
            <div>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Experience Level*</option>
                <option value="Entry Level">Entry Level (0-2 years)</option>
                <option value="Mid Level">Mid Level (2-5 years)</option>
                <option value="Senior Level">Senior Level (5+ years)</option>
              </select>
            </div>
            <div>
              <select
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Preferred Work Location*</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Odisha">Odisha</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Western Australia">Western Australia</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="p-2 border text-white rounded-md">720242</span>
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                placeholder="Enter Captcha"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                className="h-4 w-4"
                required
              />
              <label className="text-sm text-gray-100">
                I agree to receive information regarding my application by signing
                up to SkillNet*
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-orange-600 transition"
            >
              Apply Now
            </button>
            <p className="text-sm text-center text-gray-100 mt-2">
              Already have an account?{" "}
              <a href="#" className="text-white hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;