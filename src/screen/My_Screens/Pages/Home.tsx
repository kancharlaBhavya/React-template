import React from "react";
import AboutPage from "../Components/About/About";
import Display from "./Display";

function HomePage() {
  return (
    <div className="Full_Page">
        
      <div className="About-section">
        <AboutPage />
      </div>
      <div className="Education-section">
        <Display />
      </div>
    </div>
  );
}

export default HomePage;
