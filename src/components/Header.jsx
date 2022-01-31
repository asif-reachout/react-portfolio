import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setshowHeader] = useState(false);
  const path = window.location.pathname

  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill
          onClick={() => { setshowHeader(!showHeader) }}
          className="menu-icon position-fixed top-0 end-0" />
      ) : (
        <RiMenu3Fill
          onClick={() => { setshowHeader(!showHeader) }}
          className="menu-icon position-fixed top-0 end-0" />
      )}
      <ul className={`${showHeader ? 'show-header' : 'hide-header'}  n-box1`}>
        <li><Link className={`${path == '/' && 'active'}`} to='/'>Home</Link></li>
        <li><Link className={`${path == '/projects' && 'active'}`} to='/projects'>Projects</Link></li>
        <li><Link className={`${path == '/contact' && 'active'}`} to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
