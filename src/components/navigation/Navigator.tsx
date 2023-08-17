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

import HomePage from "../../screen/My_Screens/Pages/HomePage/Home";
import Add_Profile from "../../screen/My_Screens/Pages/Add_Profile_section/Add_Profile";
import Experience from "../../screen/My_Screens/Components/Experence/Experience";
import Display from "../../screen/My_Screens/Pages/Display/Display";
import Skills from "../../screen/My_Screens/Components/Skill/Skills";
import Education from "../../screen/My_Screens/Components/Education/Education";
import Dropdown from "../../screen/My_Screens/Components/extrafiles/Dropdown";
import ProfilePic from "../../screen/My_Screens/Components/Profile/ProfilePic";

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
      <Route path="/exp" element={<Experience />} />
      <Route path="/edu" element={<Education />} />
      <Route path="/skill" element={<Skills />} />
      <Route path="/drop" element={<Dropdown/>}/>
      <Route path="/profile"element={<ProfilePic/>}/>
    </Routes>
  );
};

export default Navigator;
