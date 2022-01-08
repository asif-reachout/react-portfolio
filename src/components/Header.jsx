import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setshowHeader] = useState(false);

  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill
        onClick={()=>{setshowHeader(!showHeader)}}
        className="menu-icon position-fixed top-0 end-0" />
      ) : (
        <RiMenu3Fill
        onClick={()=>{setshowHeader(!showHeader)}}
        className="menu-icon position-fixed top-0 end-0" />
      )}
      <ul>
          <li><Link to=''>Home</Link></li>
          <li><Link to=''>Projects</Link></li>
          <li><Link to=''>Courses</Link></li>
          <li><Link to=''>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
