import React, { useState } from "react";
import NavItem from "../NaveItem";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("home");
  return (
    <div className="header-container shadow fixed-top bg-white">
      <nav
        className="navbar navbar-expand-lg  navbar-light "
        style={{ height: 100 }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              width={200}
              height={100}
              src="https://deshcareer.com/logo/short-logo.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItem
   
                label="Home"
                link="/"
              />
            <NavItem
                label="Privacy Policy"
                link="/privacy-policy"
              />
                <NavItem
                label="Terms Conditions"
                link="/terms-conditions"
              />
              <NavItem
                label="About Us"
                link="/about"
              />
              <NavItem
                label="Contact Us"
                link="/contact"
              />
               <NavItem
                label="Advertise"
                link="/advertise"
              />
             
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="join-now">
                <a className="" href="#">
                  Join Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
