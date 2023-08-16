import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Experience.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addExperience, deleteExperience } from "../../../../redux/actions";
import { useNavigate } from "react-router-dom";

function Experience() {
  const experienceList = useSelector(
    (state: RootStateOrAny) => state.experienceList
  );

  const [experience, setExperience] = useState({
    Company: "",
    Position: "",
    Location: "",
  });
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleSave = () => {
    if (
      experience.Company !== "" &&
      experience.Position !== "" &&
      experience.Location !== ""
    ) {
      dispatch(addExperience(experience));

      setExperience({ Company: "", Position: "", Location: "" });
    }
  };
  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  return (
    <>
      <div className="full-exp-component">
        <div className="exp-form">
          <div className="exp-heading">Experience Form</div>
          <div className="exp-fields-input">
            <div className="exp-company-Name">
              <label>Company Name</label>
              <br></br>
              <textarea
                placeholder="Company Name"
                value={experience.Company}
                onChange={(e) => {
                  const CompanyName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(CompanyName) ||
                    CompanyName === ""
                  ) {
                    setExperience({
                      ...experience,
                      Company: CompanyName,
                    });
                  }
                }}
              />
            </div>
            <div className="exp-Position">
              <label>Position</label>
              <br></br>
              <textarea
                placeholder="Position"
                value={experience.Position}
                onChange={(e) => {
                  const PositionName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(PositionName) ||
                    PositionName === ""
                  ) {
                    setExperience({
                      ...experience,
                      Position: PositionName,
                    });
                  }
                }}
              />
            </div>
            <div className="exp-Company-Loc">
              <label>Location</label>
              <br></br>
              <textarea
                placeholder="Company Location"
                value={experience.Location}
                onChange={(e) => {
                  const CompanyLocation = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(CompanyLocation) ||
                    CompanyLocation === ""
                  ) {
                    setExperience({
                      ...experience,
                      Location: CompanyLocation,
                    });
                  }
                }}
              />
            </div>
          </div>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={()=>navigate("/homePage")}>Done</Button>

        </div>
      </div>
      <div className="experience-div">
        <h2>Experience List</h2>
        {experienceList && experienceList.length > 0 && (
          <>
            <ul>
              {experienceList.map((exp, index) => (
                <li className="exp-list-name" key={index}>
                  <p>Company: {exp.Company}</p>
                  <p>Degree: {exp.Position}</p>
                  <p>Location: {exp.Location}</p>
                  <button onClick={() => handleDeleteExperience(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Experience;
