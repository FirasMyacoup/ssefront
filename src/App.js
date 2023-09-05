import React from "react";
import Footer from "./component/Footer";
import About from "./component/about";
import NavBar from "./component/NavBar";
import Contact from  "./component/contact";
import HomePage from "./component/HomePage"
import Projects from "./component/Projects";
import Gallery from "./component/Gallery";
import Market from "./component/Market";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
   <Router>
        <NavBar/>
        
        

        <Routes>

         <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/HomePage" element={<HomePage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/Projects" element={<Projects />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/Market" element={<Market/>}></Route>


          
          



          
          

        </Routes>
        


        <Footer />
        </Router>
      

    
      
    </div>
  );
}

export default App;
