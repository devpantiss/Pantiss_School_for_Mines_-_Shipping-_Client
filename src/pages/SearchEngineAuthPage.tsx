import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";

interface DirectionProps {
  direction: number;
}

const formVariants: Variants = {
  initial: ({ direction }: DirectionProps) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute",
  }),
  animate: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.5 },
  },
  exit: ({ direction }: DirectionProps) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.5 },
  }),
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<"jobseeker" | "employer">("jobseeker");

  const toggleMode = () => setIsLogin((prev) => !prev);
  const isEmployer = userType === "employer";

  const employerVideo =
    "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742999025/9310125-uhd_3840_2160_30fps_l4ievp.mp4";
  const seekerVideo =
    "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742998746/4474927-uhd_3840_2160_30fps_v7ypop.mp4";

  const descriptionText = isEmployer
    ? "Hire certified blue-collar talent for your mining operations — quick, verified, and reliable."
    : "Find skilled jobs in the mining industry — connect with top employers and grow your future.";

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={userType}
          initial={{ opacity: 0, x: isEmployer ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isEmployer ? 50 : -50 }}
          transition={{ duration: 0.4 }}
          className="flex w-full h-full flex-col lg:flex-row relative"
        >
          {/* Background Video for Mobile */}
          <video
            className="absolute lg:hidden w-full h-full object-cover z-0"
            src={isEmployer ? employerVideo : seekerVideo}
            autoPlay
            loop
            muted
          />
          <div className="lg:hidden absolute inset-0 bg-transparent z-10" />

          {/* Employer Video Section */}
          {isEmployer && (
            <div className="relative hidden lg:flex w-1/2 h-full order-1">
              <video
                className="absolute w-full h-full object-cover"
                src={employerVideo}
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 bg-black/10 flex flex-col justify-between p-6 z-10">
                <img
                  src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743853206/Pantiss_School-Photoroom_pq3crh.png"
                  alt="Logo"
                  className="w-44 h-20"
                />
                <div className="flex items-center justify-center h-full px-8">
                  <p className="text-white text-xl text-center max-w-md">
                    {descriptionText}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Section */}
          <div
            className={`w-full lg:w-1/2 h-full flex items-center bg-black justify-center px-6 py-10 lg:px-20 z-20 ${
              isEmployer ? "order-2" : "order-1"
            }`}
          >
            <div className="w-full max-w-md bg-black bg-opacity-10 p-6 ring-2 ring-orange-500 rounded-xl shadow-md backdrop-blur-md">
              <div className="flex justify-between mb-6">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                    userType === "jobseeker" ? "bg-orange-600 text-white" : "bg-transparent text-white ring-2 ring-orange-500"
                  }`}
                  onClick={() => setUserType("jobseeker")}
                >
                  <FaUserGraduate /> Job Seeker
                </button>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                    userType === "employer" ? "bg-orange-600 text-white" : "bg-transparent text-white ring-2 ring-orange-500"
                  }`}
                  onClick={() => setUserType("employer")}
                >
                  <FaUserTie /> Employer
                </button>
              </div>

              <AnimatePresence mode="wait" custom={{ direction: isLogin ? 1 : -1 }}>
                {isLogin ? (
                  <motion.div
                    key="login"
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={{ direction: 1 }}
                  >
                    <h2 className="text-3xl font-semibold mb-6 text-gray-50">Login</h2>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded-lg"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg"
                      />
                      <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                        Login
                      </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-100">
                      Don’t have an account?{" "}
                      <button onClick={toggleMode} className="text-white hover:text-orange-500 underline">
                        Register
                      </button>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="register"
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={{ direction: -1 }}
                  >
                    <h2 className="text-3xl font-semibold mb-6 text-gray-100">Sign Up</h2>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded-lg"
                      />
                      {userType === "jobseeker" ? (
                        <>
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border rounded-lg"
                          />
                          <input
                            type="text"
                            placeholder="Current Role"
                            className="w-full p-3 border rounded-lg"
                          />
                        </>
                      ) : (
                        <>
                          <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full p-3 border rounded-lg"
                          />
                          <input
                            type="text"
                            placeholder="Your Position"
                            className="w-full p-3 border rounded-lg"
                          />
                        </>
                      )}
                      <button className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 transition">
                        Send Verification Code
                      </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-50">
                      Already have an account?{" "}
                      <button onClick={toggleMode} className="text-white hover:text-orange-600 underline">
                        Login
                      </button>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Job Seeker Video Section */}
          {!isEmployer && (
            <div className="relative hidden lg:flex w-1/2 h-full order-2">
              <video
                className="absolute w-full h-full object-cover"
                src={seekerVideo}
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-6 z-10">
                <img
                  src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743853206/Pantiss_School-Photoroom_pq3crh.png"
                  alt="Logo"
                  className="w-44 h-20"
                />
                <div className="flex items-center justify-center h-full px-8">
                  <p className="text-white text-xl text-center max-w-md">
                    {descriptionText}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
