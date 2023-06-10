import React, { memo, useCallback } from "react";
import { Link, useNavigation } from "react-router-dom";

const NavItem = ({ label, link }) => {
   
    const router = window.location.pathname

 

  return (
    <li className="nav-item" >
      <Link to={link}
        className={`nav-link ${router === link ? "active-link" : ""}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default memo(NavItem);
