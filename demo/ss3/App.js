import logo from './logo.svg';
import './App.css';
import StudentList from "./components/student/StudentList";
import React from "react";
import DemoState from "./components/DemoState";

function App() {
    let nameClass = "A0222I1";
    const changeName = (name) => {
        nameClass = name;
        alert(nameClass);

    }
    return (
        <>
            <DemoState/>
            <StudentList nameClass={nameClass} sizeOfClass="10" changeName={changeName}/>
        </>
    );
}

export default App;
