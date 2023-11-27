import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/prototype/Footer";
import { ListRent } from "./components/rent/ListService";
import { Employee } from "./components/Employee/ListEmployee";
import { CreateEmployee } from "./components/Employee/CreateEmployee";
import { Route, Routes, NavLink } from "react-router-dom";
import { Header } from "./components/prototype/Navbar";
import { UpdateEmployee } from "./components/Employee/Update";
import { Toaster} from 'react-hot-toast';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ListRent/>}></Route>
        <Route path="/employee" element={<Employee/>}></Route>
        <Route path="/update/:id" element={<UpdateEmployee/>}></Route>
        <Route path="/createEmployee" element={<CreateEmployee/>}></Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />;
      <Footer/>
    </>
  );
}

export default App;
