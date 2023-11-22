import React from "react";

function Footer() {
  const footerStyle = {
    background: "linear-gradient(to right, #f72d66, #147df5)",
  };

  return (
    <div>
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-2 mt-3 border-top"
        style={footerStyle}
      >
        <p
          className="col-md-4 mb-0 text-body-secondary"
          style={{ marginLeft: "20px",}}
        >
          © 2023 HeavenlyCrumb
        </p>

        <ul
          className="nav col-md-4 justify-content-end"
          style={{ marginRight: "20px" }}
        >
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/shop" className="nav-link px-2 text-body-secondary">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-body-secondary">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;