import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Calculator from "./components/Calculator/Calculator";
import PasswordContent from "./components/Password/PasswordContent";
import PasswordHeader from "./components/Password/PasswordHeader";
import ToDoMain from "./components/ToDo/ToDoMain";
import ToDoApp from "./components/ToDo/ToDoApp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route
          path="/password"
          element={
            <div>
              <PasswordHeader />
              <PasswordContent />
            </div>
          }
        />
        <Route
          path="/to-do"
          element={
            <div>
              <ToDoMain />
              <ToDoApp />
            </div>
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
