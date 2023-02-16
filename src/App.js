import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Maincontaint/Home/Home";
import Footer from "./Components/Footer/Footer";

import About from "./Components/Maincontaint/About/About";
import Certificates from "./Components/Maincontaint/Certificates/Certificates";
import Contacts from "./Components/Maincontaint/Contacts/Contacts";
import Domain from "./Components/Maincontaint/Domain/Domain";
import Projects from "./Components/Maincontaint/Projects/Projects";
import Skills from "./Components/Maincontaint/Skills/Skills";

import { BrowserRouter, Routes, Route } from "react-router-dom";


 
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route >

        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="certificates" element={<Certificates/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="domain" element={<Domain/>}/>
        <Route path="projects" element={<Projects/>}/>
        {/* <Route path="skills" element={<Skills/>} /> */}

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>  
      
    </div>
  );
}

export default App;
