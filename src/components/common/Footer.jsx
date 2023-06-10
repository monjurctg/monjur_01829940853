import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container footer-wraper">
        <div className="logos">
          <a className="logo" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="logo">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a className="logo ">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className=" row">
          <div className=" career col-md-4 align-items-center ">
            <img
              className="img-fluid pb-2"
              width={200}
              height={100}
              src="https://deshcareer.com/logo/short-logo.png"
              alt=""
            />
            <p >
              Desh Career is Career based newsletter in Bengali language. This
              newsletter has published weekly. This is published in every
              Saturday at 12.00 PM.
            </p>
          </div>
          <div className=" privacy-policy  col-md-4 ">
            <h4>Privacy And Terms</h4>
            <a href="#">privacy policy</a>
            <a href="#">Terms Condition</a>
            <a href="#">FAQ</a>
            
          </div>
          <div className=" support col-md-4">
            <h4>Support</h4>
            <a href="#">Affiliate Link</a>
            <a href="#">Contact us</a>
            <a href="#">Advertise with us
</a>

          </div>
        </div>
      </div>
      <hr />
     
       <div className="container">
       <div className="d-flex flex-wrap justify-content-between align-items-center">
       <div className="copy">© 2023 Newsletter E-mail Service: All Copy right reserved</div>
        <div className="d-flex footer-right " style={{gap:"20px"}}>
            <a href="">Terms</a>
            <a href=""> Cookie Policy</a>

            <a href="">Terms</a>

            <a href="">Privacy</a>

        </div>
        
      </div>
       </div>

    </footer>
  );
}

export default Footer;
