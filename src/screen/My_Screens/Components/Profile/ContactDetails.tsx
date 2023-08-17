import React from 'react'
import { useState } from 'react';
import { Button } from "@mui/material";
import EditContactDetails from './EditContactDetails';

function ContactDetails(props) {
     const [editMode, setEditMode] = useState(false);
  const [contactData, setContactData] = useState({
    name: "Kancharla Bhavya",
    email: "Bahvya8@example.com",
    phoneNumber: "1234567890",
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = (formData) => {
    console.log(formData);

    setContactData(formData);

    setEditMode(false);
  };
  return (
    <div className='full-contact-page'>
    <center>
        <div>
    {!editMode ? (
       
      <div>
        <h5>Contact Details</h5>
         <p>{contactData.name}</p>
         <p>{contactData.email}</p>
         <p>{contactData.phoneNumber}</p>
        <Button onClick={handleEdit}>Edit</Button>
      </div>
    ) : (
      <div className='save-cancle-button'>
        <EditContactDetails onSave={handleSave}  setEditMode={handleCancel} /> 
      </div>
    )}</div>
    </center>
  </div>
  )
}

export default ContactDetails
