// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import IkusasaProgram from './IkusasaProgram';
import PersonalInfoPage from './PersonalInfoPage';
import ForgotPassPage from './ForgotPassPage';
import ResetPass from './ResetPass';
import PersonalSec from './PersonalSec';
import EducationPage from './EducationPage';
import WorkExperience from './WorkExperience';
import CreatePost from './CreatePost';
import AuthPage from './AuthPage';

//IkusasaProgram

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ikusasaprogram" element={<IkusasaProgram />} />
        <Route path="/personalinfo" element={<PersonalInfoPage />} />
        <Route path="/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/ResetPass" element={<ResetPass />} />
        <Route path="/PersonalSec" element={<PersonalSec />} />
        <Route path="/EducationPage" element={<EducationPage />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/AuthPage" element={<AuthPage />} />

        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
};

export default App;
