import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./main/About";
import Contact from "./Pages/Contact";
import ProjectDetils from "./Pages/ProjectDetils";
import CustomCursor from "./Components/Cursor";


export default function App() {
  return (
    <>
    <div className="no-scroll">
 <CustomCursor />
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetils />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
     
    </>
  );
}
