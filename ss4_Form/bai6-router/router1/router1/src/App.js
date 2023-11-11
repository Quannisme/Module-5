import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {Routes, Route, NavLink} from "react-router-dom";
import { Employee } from './components/Employee';
function App() {
  return (
    <>
      <NavLink to="/login">Login</NavLink>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>
    </>
  );
}

export default App;
