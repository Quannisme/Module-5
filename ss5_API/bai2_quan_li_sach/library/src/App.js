import logo from "./logo.svg";
import "./App.css";
import { List } from "./components/ListLibrary";
import { CreateLibrary } from "./components/CreateLibrary";
import { Navigate } from "react-router-dom";
import { Route, Routes, NavLink } from "react-router-dom";
import { Update } from "./components/UpdateLibrary";

function App() {
  return (
    <>
      <NavLink to="/list">List</NavLink>
      <NavLink to="/create">Create</NavLink>
      <Routes>
        <Route path="/" element={<Navigate replace to="/list" />} />
        <Route path="/list" element={<List />}></Route>
        <Route path="/create" element={<CreateLibrary />}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        {/* <Route path="/update/:id" element={<Update />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
