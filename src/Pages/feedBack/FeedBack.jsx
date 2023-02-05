import React from 'react'
import "./feedBack.css"
import { Visibility } from "@material-ui/icons";

function FeedBack() {
  return (
    <div className="feedback">
    <span className="feedBackTitle">Feedbacks</span>
    <ul className="feedBackList">
      <li className="feedBackListItem">
        <img
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="feedBackImg"
        />
        <div className="widgetSmUser">
          <span className="Username">Anna Keller</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display User
        </button>
        </div>
      </li>

      <li className="feedBackListItem">
        <img
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="feedBackImg"
        />
        <div className="widgetSmUser">
          <span className="Username">Anna Keller</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display User
        </button>
      </li>


      
     
    </ul>
    
  </div>
  )
}

export default FeedBack