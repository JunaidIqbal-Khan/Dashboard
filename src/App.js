
import './App.css';
import { Routes, Route} from "react-router-dom";
import Landing from './Pages/LandingPage/Landing';
import SignIn from './Pages/SignInPage/SignIn';
import Dashboard from './Pages/DashBoard/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </div>
  );
}
//Hi
export default App;
