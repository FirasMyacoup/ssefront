import React from "react";
import Footer from "./component/Footer";
import About from "./component/about";
import NavBar from "./component/NavBar";
import Contact from  "./component/contact";
import HomePage from "./component/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
   <Router>
        <NavBar/>

        <Routes>
    
          <Route exact path="/HomePage" element={<HomePage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
         

        </Routes>
        <Footer />
        </Router>

    
      
    </div>
  );
}

export default App;
