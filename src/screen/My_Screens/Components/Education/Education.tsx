import { Button } from "@mui/base";
import { Handshake } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "../../../../redux/actions";
import "./Education.css";

function Education() {
  const educationList = useSelector(
    (state: RootStateOrAny) => state.educationList
  );
  const dispatch = useDispatch();

  const [education, setEducation] = useState({
    University: "",
    Degree: "",
    Field_Of_Study: "",
    Year: "",
  });
  const navigate = useNavigate();
  const handleSave = () => {
    if (
      education.University !== "" &&
      education.Degree !== "" &&
      education.Field_Of_Study !== "" &&
      education.Year !== ""
    ) {
      dispatch(addEducation(education));

      setEducation({
        University: "",
        Degree: "",
        Field_Of_Study: "",
        Year: "",
      });
    }
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };


  return (
    <>
      <div className="full-edu-component">
        <div className="edu-form">
          <div className="edu-heading">Education Form</div>
          <div className="edu-fields-input">
            <div className="edu-Uni_Name">
              <label>Univeresity Name</label>
              <br></br>
              <textarea
                placeholder="University Name"
                value={education.University}
                onChange={(e) => {
                  const UniversityName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(UniversityName) ||
                    UniversityName === ""
                  ) {
                    setEducation({
                      ...education,
                      University: UniversityName,
                    });
                  }
                }}
              />
            </div>
            <div className="edu-Degree">
              <label>Degree </label>
              <br></br>
              <textarea
                placeholder="Degree"
                value={education.Degree}
                onChange={(e) => {
                  const DegreeName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(DegreeName) ||
                    DegreeName === ""
                  ) {
                    setEducation({
                      ...education,
                      Degree: DegreeName,
                    });
                  }
                }}
              />
            </div>
            <div className="edu-field_Of_Study">
              <label>Field_Of_Study</label>
              <br></br>
              <textarea
                placeholder="Branch"
                value={education.Field_Of_Study}
                onChange={(e) => {
                  const Field_Of_Study_Name = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(Field_Of_Study_Name) ||
                    Field_Of_Study_Name === ""
                  ) {
                    setEducation({
                      ...education,
                      Field_Of_Study: Field_Of_Study_Name,
                    });
                  }
                }}
              />
            </div>
            <div className="edu-year">
              <label>Year </label>
              <input
                type="number"
                placeholder="YYYY"
                min="1999"
                max="2023"
                value={education.Year}
                onChange={(e) => {
                  const YearOfStudy = e.target.value;

                  setEducation({
                    ...education,
                    Year: YearOfStudy,
                  });
                }}
              />
            </div>
          </div>

          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
      <div className="display-edu-list">
        <h2>Education List</h2>
        {educationList && educationList.length > 0 ? (
          <ul>
            {educationList.map((edu, index) => (
              <li className="list-name" key={index}>
                <p>University: {edu.University}</p>
                <p>Degree: {edu.Degree}</p>
                <p>Field of Study: {edu.Field_Of_Study}</p>
                <p>Year: {edu.Year}</p>
                <Button onClick={() => handleDeleteEducation(index)}>
                  Delete
                </Button>
                <Button onClick={() => navigate("/display")}>Show</Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No details provided </p>
        )}
      </div>
    </>
  );
}
export default Education;
