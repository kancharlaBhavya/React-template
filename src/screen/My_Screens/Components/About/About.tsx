import React from "react";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./About.css";

function AboutPage() {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum nulla, lacinia id tempor sed, dapibus a urna. Nullam metus ante, imperdiet quis quam et, porta dictum massa. Vivamus semper iaculis imperdiet. In hac habitasse platea dictumst. Quisque quis hendrerit nunc, vitae semper ipsum. Aenean pulvinar ac leo vitae iaculis"
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleDone = () => {
    setIsEditing(false);
  };

  return (
    <div className="about">
      <div className="about-edit">
      <h1>About</h1>
      {isEditing ? (
        <Button className="done-button" onClick={handleDone}>
          Done
        </Button>
      ) : (
        <Tooltip title={"Edit"}>
          <IconButton>
            <Edit onClick={handleEdit} />
          </IconButton>
        </Tooltip>
      )}</div>
      {isEditing ? (
        <textarea
          rows={4}
          cols={100}
          className="edit-textarea"
          value={text}
          onChange={handleChange}
        />
      ) : (
        <p className="display-text">{text}</p>
      )}
    </div>
  );
}

export default AboutPage;
