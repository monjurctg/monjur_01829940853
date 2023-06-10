import React from "react";
import Mainlayout from "../layout/Mainlayout";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <Mainlayout>
    
        <div className="home-wraper">
          <h1>Get Smarter about your career</h1>
          <p className="newsletter">
            Get the <strong> 5-minute newsletter</strong> keeping about smart
            career
          </p>
          <div className="d-flex flex-column justify-content-center subcription">
            <div className="email">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input type="text" placeholder="Enter your Email" />
              <button className="btn btn-danger">Join Free</button>
            </div>
            <button className="btn btn-danger mobile-btn">Join Free</button>

            <p>
              We're committed to your privacy. DashCareer uses the information
              you provide to contact you about our relevant content and
              services. You may unsubscribe from these communications at any
              time. For more information, check out our Privacy Policy.
            </p>
          </div>
        </div>
     
    </Mainlayout>
  );
}

export default Home;
