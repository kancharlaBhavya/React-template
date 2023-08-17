import React from "react";
import AboutPage from "../../Components/About/About";
import ProfilePic from "../../Components/Profile/ProfilePic";
import Display from "../Display/Display";

function HomePage() {
  return (
    <div className="Full_Page">
      <div className="Profile-section">
        <center>
          <ProfilePic /><br></br>
          <h3>Kancharla Bhavya</h3>
        </center>
      </div>
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
