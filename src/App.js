import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./Pages/LandingPage/Landing";
import SignIn from "./Pages/SignInPage/SignIn";
import Dashboard from "./Pages/DashBoard/dashboard";
import Topbar from "./Component/topbar/Topbar";
import Sidebar from "./Component/sidebar/Sidebar";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  return (
    <div>
      {isHome ? <Topbar /> : ""}

      {console.log("Hello", location)}
      <div className={isHome ? "container" : ""}>
        {isHome ? <Sidebar /> : ""}

        {console.log("Hello", window.location.pathname)}
        <Routes>
          <Route
            path="/"
            element={<Landing setIsHome={setIsHome} isHome={isHome} />}
          />
          <Route path="/SignIn" element={<SignIn />} />

          {/* <Route path="/Home" element={<Home />} /> */}

          <Route
            path="/Home"
            element={<Home setIsHome={setIsHome} isHome={isHome} />}
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
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
