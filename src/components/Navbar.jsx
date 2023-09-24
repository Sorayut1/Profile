import React, { useState } from "react";
import { Link } from 'react-scroll'

import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="">
      <Link to="/" className="title">
        Profile
      </Link>
      <div className="">
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        
        <span></span>
        <span></span>
        <span></span>
    
      </div>
      </div>
      <ul className= {menuOpen ? "open" : ""}>
        <li className="">
          <Link activeClass="active" onClick={() => setMenuOpen(!menuOpen)}  id="color" to="home" spy={true} smooth={true} offset={-200} duration={500} >Home</Link>
        </li>
        <li className="">
          <Link activeClass="active" onClick={() => setMenuOpen(!menuOpen)} to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
        </li>
        <li className="">
          <Link activeClass="active" onClick={() => setMenuOpen(!menuOpen)} to="skillbar" spy={true} smooth={true} offset={-220} duration={500} >Skill</Link>
        </li>
        <li className="">
          <Link activeClass="active" onClick={() => setMenuOpen(!menuOpen)} to="project" spy={true} smooth={true} offset={-220} duration={500} >Project</Link>
        </li>
        <li className="">
          <Link activeClass="active" onClick={() => setMenuOpen(!menuOpen)} to="resume" spy={true} smooth={true} offset={-220} duration={500} >Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar

