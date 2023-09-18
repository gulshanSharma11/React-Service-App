import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from './components/Contact';



import "./styles/home.scss";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Contact" element={<Contact />} />
        
        <Route  path="/Services" element={<Services />} />
       

        
      </Routes>

      
      <Footer />
    </BrowserRouter>
  )
}
