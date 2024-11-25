import Navbar from "./component/Navbar/navbar";
import React from "react";
import useAutoReload from "./Autoloader";
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import About from "./component/Navbar/Pages/About";
import Events from "./component/Navbar/Pages/Events";
import Projects from "./component/Navbar/Pages/Projects";
import Blogs from "./component/Navbar/Pages/Blogs";
import NotFound from "./component/Not_Found/NotFound";
import Home from "./component/Navbar/Pages/Home";

function App() {
    useAutoReload();
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home/>} />
                  
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="*" element={< NotFound/>} /> {/* Catch-all route */}
            </Routes>
        </Router>
    );
}

export default App;
