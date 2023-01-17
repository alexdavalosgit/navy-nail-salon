import React from "react";

function Footer() {
  return (
    <div className="footer bg-cream">
      <p className="fs-6">
        Copyright © 2022 Navy Nails & Spa - All Rights Reserved.
      </p>
      <div className="d-flex justify-content-center ">
        <a href="/about" className="px-1 link-style">
          Contact Us
        </a>
        <a href="/services" className="px-1 link-style">
          Services
        </a>
        <a href="/" className="px-1 link-style">
          Home
        </a>
      </div>
    </div>
  );
}

export default Footer;
