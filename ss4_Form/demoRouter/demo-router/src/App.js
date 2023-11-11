import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";

function App() {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">about page</NavLink>
      <Routes>
          <Route path=""></Route>
      </Routes>
    </>
  );
}

export default App;
