import React from 'react'
import "./feedBack.css"
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Foam from '../foam/Foam';
function FeedBack() {
  return (
    <div className="feedback">
    <span className="feedBackTitle">Feedbacks</span>
    <ul className="feedBackList">
    <li className="feedBackListItem">
        <div>
        <img
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="feedBackImg"
        />
         <div className="feedbackUser">
          <span className="Username">Umais Iqbal</span>
          <span className="feedbackDate">15.2.2023</span>
        </div>
        </div>
       <div className='paragraph'>
        <p>Here, we will learn how to update & display user profile image using Class Component in MERN Fullstack Project from Reactjs Frontend using Nodejs</p>
        </div>
       
        <div>
       <Link to="Foam" className='link'> <button className="feedbackButton">
          Respond
        </button>
        </Link>
        </div>
      </li>
      <li className="feedBackListItem">
        <div>
        <img
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="feedBackImg"
        />
         <div className="feedbackUser">
          <span className="Username">Haris Saleem</span>
          <span className="feedbackDate">18.2.2023</span>
        </div>
        </div>
       <div className='paragraph'>
        <p>Here, we will learn how to update & display user profile image using Class Component in MERN Fullstack Project from Reactjs Frontend using Nodejs</p>
        </div>
        <div>
        <button className="feedbackButton">
         
          Respond
        </button>
        </div>
        
      </li>

      
     
    </ul>
    
  </div>
  )
}

export default FeedBack