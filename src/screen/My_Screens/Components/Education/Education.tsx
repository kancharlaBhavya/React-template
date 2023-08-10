import React, { useState } from "react";
import "./Education.css";

function Education() {
  const [education, setEducation] = useState({
    University: "",
    Degree: "",
    Field_Of_Study: "",
    Year: "",
  });
  return (
    <div className="full-edu-component">
      <div className="edu-form">
        <div className="edu-heading">Education Form</div>
        <div className="edu-fields-input">
          <div className="edu-Uni_Name">
            <label>Univeresity Name</label>
            <textarea
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
            <label>Degree</label>
            <textarea
              value={education.Degree}
              onChange={(e) => {
                const DegreeName = e.target.value;
                if (/^[A-Za-z0-9\s]+$/.test(DegreeName) || DegreeName === "") {
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
            <textarea
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
            <label>Year</label>
            <input type="date"
              value={education.Year}
              onChange={(e) => {
                const YearOfStudy = e.target.value;
                if (
                  /^[A-Za-z0-9\s]+$/.test(YearOfStudy) ||
                  YearOfStudy === ""
                ) {
                  setEducation({
                    ...education,
                    Year: YearOfStudy,
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
