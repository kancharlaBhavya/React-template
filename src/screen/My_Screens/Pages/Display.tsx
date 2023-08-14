import { hi } from "date-fns/locale";
import React from "react";
import { useSelector } from "react-redux";
import { loadingActionReducer } from "../../../redux/reducer";
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
  const navigate = useNavigate();
  return (
    <div className="display-edu-list-displaypage">
      <h2>Education </h2>
      <div className="edit-icons-edu">
      <Tooltip title={"Edit"}>
        <IconButton>
          <Edit onClick={() => navigate("/edu")} />
        </IconButton>
      </Tooltip></div>
      {educationList && educationList.length > 0 ? (
        <ul>
          {educationList.map((edu, index) => (
            <li className="list-name" key={index}>
              <p>University: {edu.University}</p>
              <p>Degree: {edu.Degree}</p>
              <p>Field of Study: {edu.Field_Of_Study}</p>
              <p>Year: {edu.Year}</p>
            </li>
          ))}
        </ul>
      ):(
        <p></p>
      )}
    </div>
  );
}

export default Display;
