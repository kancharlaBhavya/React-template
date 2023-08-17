import React from 'react'
import { useState } from 'react';
import { Button } from "@mui/material";
// import { onSave } from "./someModule";


function EditContactDetails({onSave,setEditMode}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
      };
      const handleCancel = () => {
        setEditMode(false);
      };
  return (
    <div className='full-edit-contact-details'>
   
      <h6>Contact Details</h6>
      <form onSubmit={handleSubmit}>
        <div className='name-text-field'>
          <label htmlFor="name">Name:</label>
          <textarea
    
            rows={1}
            cols={10}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='email-text-field'>
          <label htmlFor="email">Email:</label>
          <textarea
        rows={1}
        cols={10}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='phonenumber-text-field'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <textarea
          rows={1}
          cols={10}
      
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <Button className='savebutton-edit' type="submit">Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>

      </form>
   
  </div>
  )
}

export default EditContactDetails


