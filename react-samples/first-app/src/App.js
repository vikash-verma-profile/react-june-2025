import { Route, Router, Routes } from "react-router-dom";
import ContactUs from "./components/Contactus";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
