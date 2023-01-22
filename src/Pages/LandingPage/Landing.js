import React from 'react'
import "./Landing.css"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"

function Landing() {
  return (
    <div onload="slider()">
    <div class="banner">
            <div class="slidder">
              <img src="img1.jpg" id="slideImg"/>
            </div>
            <div class="overlay">
              <div class="navbar">
                <div class="logo">
                  <h1>Logo</h1>
                </div>
                <div class="menu-icon">
                   <img src="img1.jpg" id="slideImg"/>
                  <img src="img2.jpg" id="slideImg"/>
                  <img src="img3.jpg" id="slideImg"/> 
                </div>
              </div>
              <div class="content">
                <h1>LET'S START TO DESIGN</h1>
                <h3>LET'S START TO DESIGN</h3>
                <div>
                  <button type="button">SignUp</button>
                  <button type="button" class="btn-2">Login/SignIn</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Landing