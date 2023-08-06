import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TutorPage from 'pages/TutorPage';
import TutorDetailPage from 'pages/TutorDetailPage';
import TutorLoginPage from 'pages/auth/TutorLoginPage';
import StudentLoginPage from 'pages/auth/StudentLoginPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TutorSignup from './containers/Auth/TutorSignup';
import StudentSignup from './containers/Auth/StudentSignup';
import PrivateRoute from './components/HOCs/PrivateRoute';

const Router = ({}) => {
  return (
    <>
      {/* when using logged in then header will show otherwise hide  */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/tutor-details" element={<TutorDetailPage />} />
        </Route>
        <Route path="/tutor-login" element={<TutorLoginPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/tutor-signup" element={<TutorSignup />} />
        <Route path="/student-signup" element={<StudentSignup />} />
      </Routes>
      {/* when using logged in then footer will show otherwise hide  */}
      {/* <Footer /> */}
    </>
  );
};

export default Router;
