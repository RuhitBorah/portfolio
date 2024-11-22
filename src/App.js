import Navbar from "./component/Navbar/navbar";
import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import About from "./component/Navbar/Pages/About";
import Events from "./component/Navbar/Pages/Events";
import Projects from "./component/Navbar/Pages/Projects";
import Blogs from "./component/Navbar/Pages/Blogs";

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ 
                   <div>
                       <h1>Home Page</h1>
                       <p>Welcome to our website!</p>
                   </div>
                } />
                  
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Blogs" element={<Blogs />} />
            </Routes>
        </Router>
    );
}

export default App;
