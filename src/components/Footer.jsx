import React from "react";
import "../components/style/footer.css";
function Footer() {
  return (
    <div id="footer_div">
      <section id="foot_logo_sec" className="footer_section">
        <h2>Cloud Shop</h2>
      </section>
      <section id="foot_link_sec" className="footer_section">
        <h3>Links</h3>
        <ul>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Become a Seller</li>
          <li>Privacy policy</li>
        </ul>
      </section>
      <section id="foot_help_sec" className="footer_section">
        <h3>Help</h3>
        <ul>
          <li>payment</li>
          <li>Cancellation and Return</li>
          <li>FAQ</li>
        </ul>
      </section>
      <section id="foot_subs_sec" className="footer_section">
        <h3>Get in Touch</h3>
        <div id="foot_span_div">
          <input
            id="sub_in"
            type="email"
            name="sub_mail"
            placeholder="Email Id"
          />
          <button id="sub_btn">Subscribe</button>
        </div>
        <div className="footer_icons">
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-gmail"></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
        </div>
      </section>
    </div>
  );
}

export default Footer;
