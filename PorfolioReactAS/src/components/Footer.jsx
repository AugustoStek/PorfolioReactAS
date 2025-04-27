import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 w-100 mt-auto">
      <div className="container">
        <p className="mb-2">
          Contact:{" "}
          <a href="mailto:augustostekelberg@gmail.com" className="text-info">
            augustostekelberg@gmail.com
          </a>
        </p>
        <h5 className="mb-3">Follow me</h5>
        <div>
          <a
            className="btn btn-outline-info btn-sm me-2"
            href="https://https://github.com/AugustoStek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            className="btn btn-outline-info btn-sm"
            href="https://www.instagram.com/stek.augusto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
