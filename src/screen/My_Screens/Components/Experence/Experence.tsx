import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Experence.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addExperience, deleteExperience } from "../../../../redux/actions";

function Experence() {
  const experienceList = useSelector(
    (state: RootStateOrAny) => state.experienceList
  );

  const [experence, setExperence] = useState({
    Company: "",
    Position: "",
    Location: "",
  });
  const dispatch = useDispatch();
  const handleSave = () => {
    if (
      experence.Company !== "" &&
      experence.Position !== "" &&
      experence.Location !== ""
    ) {
      dispatch(addExperience(experence));

      setExperence({ Company: "", Position: "", Location: "" });
    }
  };
  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  return (
    <>
      <div className="full-exp-component">
        <div className="exp-form">
          <div className="exp-heading">Experence Form</div>
          <div className="exp-fields-input">
            <div className="exp-company-Name">
              <label>Company Name</label>
              <br></br>
              <textarea
                placeholder="Company Name"
                value={experence.Company}
                onChange={(e) => {
                  const CompanyName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(CompanyName) ||
                    CompanyName === ""
                  ) {
                    setExperence({
                      ...experence,
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
                value={experence.Position}
                onChange={(e) => {
                  const PositionName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(PositionName) ||
                    PositionName === ""
                  ) {
                    setExperence({
                      ...experence,
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
                value={experence.Location}
                onChange={(e) => {
                  const CompanyLocation = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(CompanyLocation) ||
                    CompanyLocation === ""
                  ) {
                    setExperence({
                      ...experence,
                      Location: CompanyLocation,
                    });
                  }
                }}
              />
            </div>
          </div>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
      <div className="experence-div">
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

export default Experence;
