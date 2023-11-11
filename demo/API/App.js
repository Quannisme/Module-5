import logo from './logo.svg';
import './App.css';
import {StudentList} from "./components/student/StudentList";
import {StudentCreate} from "./components/student/StudentCreate";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import {NotFound} from "./components/student/NotFound";
import {StudentUpdate} from "./components/student/StudentUpdate";

function App() {
    return (
        <>
            <NavLink to="/student">List</NavLink>
            <NavLink to="/create">Create</NavLink>
            <Routes>
                <Route path="/students" element={<StudentList/>}></Route>
                <Route path="/create" element={<StudentCreate/>}></Route>
                <Route path="/update/:id" element={<StudentUpdate/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>

            <ToastContainer/>
        </>
    );
}

export default App;
