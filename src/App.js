import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/Landing";
import SignIn from "./Pages/SignInPage/SignIn";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Topbar from "./Component/topbar/Topbar";
import Sidebar from "./Component/sidebar/Sidebar";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
function App() {
  return (
    <div>
      {/* <Topbar /> */}
{console.log("link",window.location.pathname)
}

      <div className="container">
        {/* <Sidebar/> */}
        {
  window.location.pathname==="/Home"?<><Topbar/><Sidebar/></>:""
}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignIn" element={<SignIn />} />

          <Route path="/Home" element={<Home />} />

          {/* <Route path="/" element={<Home/>}/>
  <Route path="/users" element={<UserList/>}/>
  <Route path="/user/:userId" element={<User/>}/>
  <Route path="/newUser" element={<NewUser/>}/> */}
        </Routes>
      </div>

      {/* <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        
        </Routes>  */}
    </div>
  );
}
//Hi
export default App;
