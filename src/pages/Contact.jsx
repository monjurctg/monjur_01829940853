import React from "react";
import Mainlayout from "../layout/Mainlayout";

function Contact() {
  return (
    <Mainlayout>
      <div className="home-wraper">
        <h1>Contact Us</h1>

        <p>
          If you want to contact us: you can send an email to{" "}
          <span style={{ color: "#007bff" }}>
          <a href="mailto:contact.deshcareer@gmail.com" target="_blank">contact.deshcareer@gmail.com</a>
            </span>
        </p>
      
        <p>If you want to meet with us, you can come to our office based on an appointment. </p>
        <p>Our Office address:</p>
        <p>House: 13/3,</p>
        <p>Road: 2,</p>
        <p>Shyamoly, Dhaka-1207</p>
        <p>+8801880811047</p>
      </div>
    </Mainlayout>
  );
}

export default Contact;
