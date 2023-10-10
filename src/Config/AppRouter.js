import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "../Authentication/SignupPage";
import LoginPage from "../Authentication/LoginPage";
import Protected from "../Authentication/Protected";
// import QuizScreen from "../Authentication/QuizScreen";
import LMS_Panel from "../Screen/LMS_Panel";
import AppDrawer from "../Components/AppDrawer";
import InstituteList from "../Screen/InstituteList";
import InstituteForm from "../Screen/InstituteForm";
// import QuizScreen from '../Screen/QuizScreen'

export default function AppRouter() {
  return (
    <div>
      <Router>
        <AppDrawer />
        <Routes>
          <Route path="/" element={<Protected Screen={LMS_Panel} />} />
          <Route
            path="/Institute-list"
            element={<Protected Screen={InstituteList} />}
          />
          <Route
            path="/Institute-form"
            element={<Protected Screen={InstituteForm} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}
