import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NanoContractors from "./pages/NanoContractors";
import Businesses from "./pages/Businesses";
import Workers from "./pages/Workers";
import SearchEnginePage from "./pages/SearchEnginePage";
import JobDetails from "./components/SearchEnginePage/JobDetails";
import Academics from "./pages/Academics";
import JobListPage from "./pages/JobListingPage";
import ApplicantTrackerPage from "./pages/ApplicantTrackerPage";
import CounsellingPage from "./pages/CounsellingPage";
import JobSeekerAuth from "./pages/JobSeekerAuth";
import BusinessesAuth from "./pages/BusinessesAuth";
import JobSeekersDashboard from "./pages/JobSeekerDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";

// Wrapper component to conditionally render Header/Footer
function LayoutWrapper() {
  const location = useLocation();
  const HIDE_LAYOUT_ROUTES = [
    "/job-search-engine/job-providers/auth",
    "/job-search-engine/job-seekers/auth",
  ];
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname)

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-nano-contractors" element={<NanoContractors />} />
        <Route path="/career-counselling" element={<CounsellingPage />} />
        <Route path="/for-businesses" element={<Businesses />} />
        <Route path="/for-workers" element={<Workers />} />
        <Route path="/job-search-engine" element={<SearchEnginePage />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/job-listings" element={<JobListPage />} />


        <Route path="/job-search-engine/job-providers/auth" element={<BusinessesAuth />} />
        <Route path="/job-search-engine/job/applicants" element={<ApplicantTrackerPage />} />
        <Route path="/job-search-engine/job-seekers/auth" element={<JobSeekerAuth />} />
        <Route path="/job-search-engine/job-seekers/profile" element={<JobSeekersDashboard />} />
        <Route path="/job-search-engine/job-providers/profile" element={<BusinessDashboard />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
