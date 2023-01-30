import React from 'react'
import "./Landing.css"
import { useEffect, useState } from 'react'
import SignIn from '../SignInPage/SignIn'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import {NavLink} from 'react-router-dom'
function Landing() {

const [isSignIn,setIsSignIn] = useState(false);




//   const slidercall=(len,i,Images,slideImg)=>{
//     if (i > len-1){
//       i=0;
//     }
//     slideImg.src = Images[i];
//     i++;
//     setTimeout(slidercall(),3000);
//   }
//   useEffect(() => {
   
    
//       var slideImg = document.getElementById("slideImg");
// var Images = new Array(
//   img1,
//   img2,
//   img3,
//   img4,
// );

// var len = Images.length;
// var i=0;

//     }
//   , []);

  return (
    <>
    {/* <div onload="slider()"> */}
    <div class="banner">
            <div class="slidder">
              <img src={img1} id="slideImg"/>
            </div>
            <div class="overlay">
              <div class="navbar">
                <div class="logo">
                  <h1>Logo</h1>
                </div>
             
              </div>
              <div class="content">
                <h1>LET'S START TO DESIGN</h1>
                <h3>LET'S START TO DESIGN</h3>
                <div>
                  <button type="button" onClick={()=>setIsSignIn(true)}>Let's Start</button>
                  {/* <button type="button" class="btn-2">Login/SignIn</button> */}
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        <SignIn open={isSignIn} setOpen={setIsSignIn}/>
        </>
  )
}

export default Landing
{/* <script>
var slideImg = document.getElementById("slideImg");
var Images = new Array(
  "Images/img1.jpg",
  "Images/img2.jpg",
  "Images/img3.jpg",
  "Images/img4.jpg"
);

var len = Images.length;
var i=0;
function slider (){
  if (i > len-1){
    i=0;
  }
  slideImg.src = Images[i];
  i++;
  setTimeout('slider ()',3000);

}
</script> */}