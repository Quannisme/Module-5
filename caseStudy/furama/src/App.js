import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/prototype/Footer";
import { ListRent } from "./components/rent/ListService";
import { Header } from "./components/prototype/Navbar";
import { Employee } from "./components/Employee/ListEmployee";
import { CreateEmployee } from "./components/Employee/CreateEmployee";

function App() {
  return (
    <>
      <Header />
      <Employee/>
      <CreateEmployee/>
      <Footer/>
    </>
  );
}

export default App;
