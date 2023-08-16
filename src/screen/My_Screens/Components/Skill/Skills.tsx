import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSkill, deleteSkill } from "../../../../redux/actions";

function Skills() {
  const skillList = useSelector((state: RootStateOrAny) => state.skillList);
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index));
  };
  const handleSave = () => {
    const newSkill = {
      skill,
    };

    dispatch(addSkill(newSkill));

    setSkill("");
  };
  return (
    <div className="full-skills-component">
      <div className="skills-form">
        <div className="skills-heading">Add Skills</div>
        <div className="skills-fields-input">
          <div className="skills-company-Name">
            <label>Skill:</label>
            <textarea
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
        <div className="skill-div">
          <h2>Skills</h2>
          <div className="SkillsList">
            {skillList.length > 0 && (
              <>
                <ul>
                  {skillList.map((skill, index) => (
                    <li key={index}>
                      {skill.skill}
                      <button onClick={() => handleDeleteSkill(index)}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
