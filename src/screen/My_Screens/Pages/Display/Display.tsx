import { hi } from "date-fns/locale";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadingActionReducer } from "../../../../redux/reducer";
import { RootStateOrAny } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Display.css";

function Display() {
  const educationList = useSelector(
    (state: RootStateOrAny) => state.educationList
  );
  const experienceList = useSelector(
    (state: RootStateOrAny) => state.experienceList
  );
  const navigate = useNavigate();
  return (
    <>
      {/* experience in display page */}
      <div className="experience-section-display">
      <div className="two-divs">
        <h3>Experience</h3>
        <div className="edit-icons-exp">
          <Tooltip title={"Edit"}>
            <IconButton>
              <Edit onClick={() => navigate("/exp")} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="displayExperienceList">
        {experienceList && experienceList.length > 0 && (
          <>
            <ul>
              {experienceList.map((exp, index) => (
                <li className="exp-list-name-display" key={index}>
                  <p><h4> {exp.Company}</h4></p>
                  <p>{exp.Position}  -  {exp.Location}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div></div>

      {/* education section */}
      <div className="display-edu-list-displaypage">
      <div className="two-divs">
        <h3>Education</h3>
        <div className="edit-icons-edu">
          <Tooltip title={"Edit"}>
            <IconButton>
              <Edit onClick={() => navigate("/edu")} />
            </IconButton>
          </Tooltip>
        </div>
     </div>
      <div className="displayEducationList">
        {educationList && educationList.length > 0 ? (
          <ul className="listOfEdu">
            {educationList.map((edu, index) => (
              <li className="list-name" key={index}>
                <p><h4> {edu.University}</h4></p>
                <p> {edu.Degree} - {edu.Field_Of_Study}</p>
                <p>Year-{edu.Year}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div> 
      </div>

      {/* Skills */}
      <div className="display-skills-list-displaypage">
      <div className="two-divs">
        <h3>Skills</h3>
        <div className="edit-icons-skills">
          <Tooltip title={"Edit"}>
            <IconButton>
              <Edit onClick={() => navigate("/skill")} />
            </IconButton>
          </Tooltip>
        </div>
     </div>
      </div>
    </>
  );
}

export default Display;
