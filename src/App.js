import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/Registerpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />{" "}
        <Route path="/register" element={<RegisterPage />} />{" "}
        <Route path="/login" element={<h1> RegisterPage </h1>} />{" "}
        {/* {Create Route} */}{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
