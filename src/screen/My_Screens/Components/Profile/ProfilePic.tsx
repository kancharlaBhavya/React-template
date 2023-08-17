import React from 'react'
import ContactDetails from './ContactDetails';
import "./ProfilePic.css";

function ProfilePic() {
  return (
    <div className='full-profile-details'>
        <div className='profile-details'>
            <div className='profile-front-side'>
            <img src="/profile32.png" alt="Avatar" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className='profile-back-side'>
                <ContactDetails/>   
            </div>
        </div>
      
    </div>
  )
}

export default ProfilePic;
