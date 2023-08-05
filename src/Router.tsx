import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import TutorPage from "pages/TutorPage";
import TutorDetailPage from "pages/TutorDetailPage";
import TutorLoginPage from "pages/auth/TutorLoginPage";
import StudentLoginPage from "pages/auth/StudentLoginPage";
import Header from "components/Header";
import Footer from "components/Footer";

const Router = ({}) => {
  return (
    <>
      {/* when using logged in then header will show otherwise hide  */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/tutor-details" element={<TutorDetailPage />} />
        <Route path="/tutor-login" element={<TutorLoginPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
      </Routes>
      {/* when using logged in then footer will show otherwise hide  */}
      {/* <Footer /> */}
    </>
  );
};

export default Router;
