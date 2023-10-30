import logo from "./logo.svg";
import "./App.css";
import React from "react";
import AlertMessage from "./components/Alert";

function App() {
   const alertText = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.";
  return (
    <>
      <AlertMessage text={alertText}/>
    </>
  );
}

export default App;
