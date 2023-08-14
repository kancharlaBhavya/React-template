import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../screen/Dashboard";
import Home from "../../screen/Home";
import Profile from "../../screen/Profile";
import Settings from "../../screen/Settings";
import Company from "../../screen/Company";
import TermsOfUse from "../../screen/TermsOfUse";
import PrivacyPolicy from "../../screen/PrivacyPolicy";
import CookiePolicy from "../../screen/CookiePolicy";

import HomePage from "../../screen/My_Screens/Pages/Home";
import Add_Profile from "../../screen/My_Screens/Pages/Add_Profile";
import Experence from "../../screen/My_Screens/Components/Experence/Experence";
import Education from "../../screen/My_Screens/Components/Education/Education";
import Display from "../../screen/My_Screens/Pages/Display";
import Skills from "../../screen/My_Screens/Components/Skill/Skills";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/component-list" element={<Dashboard />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/company" element={<Company />} />
      <Route path="/termsofuse" element={<TermsOfUse />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/cookiepolicy" element={<CookiePolicy />} />
      {/* my-pages */}
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/add" element={<Add_Profile />} />
      <Route path="/display" element={<Display />} />
      {/* components */}
      <Route path="/exp" element={<Experence />} />
      <Route path="/edu" element={<Education />} />
      <Route path="/skill" element={<Skills />} />
    </Routes>
  );
};

export default Navigator;
