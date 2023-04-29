import React from 'react'
import "./userProfile.css"
import EditableUserProfile from './EditableUserProfile';
import { useState, useEffect } from 'react';

import UserProfileEdit from './UserProfileEdit'
const persons = [
  "Iqbal",
  "Khan",
  "JD"
]

function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomName() {
  return "Junaid " + persons[Math.floor(Math.random() * persons.length)]
}





function UserProfile() {

  const now = new Date(Date.now());
  const defaultBirthday = new Date(now.getTime() + 86400000);

  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState(randomName());
  const [lastName, setLastName] = useState
  (randomName());
  const [email, setEmail] = useState();


  const [month, setMonth] = useState(defaultBirthday.getMonth());
  const [day, setDay] = useState(defaultBirthday.getDate());
  const [color, setColor] = useState(randomColor());

  const stored = {name,lastName, email, month, day, color};
  const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

  function handleEditComplete(result) {
      console.log("handleEditComplete", result);
      if (result != null) {
          setName(result.name);
          setLastName(result.lastName);
          setEmail(result.email);

          setMonth(result.month);
          setDay(result.day);
          setColor(result.color);
      }        
      setEditMode(false);
  }



  return (
    <div className='userprofile'>
    <span className="userprofileTitle">My Profile</span>
<div className='usercontainer'>
{
                    editMode
                        ? <>
                            <h1>My Profile</h1>
                            <h2> Profile picture </h2>

                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            {
                                isBirthdayToday
                                    ? <div className="birthday">Happy Birthday!</div>
                                    : <h1>My Profile</h1>
                                    
                            }
                            <UserProfileEdit
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
</div>
    </div>
  )
}

export default UserProfile