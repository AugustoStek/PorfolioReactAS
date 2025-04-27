import React from "react";

const Header = ({ studentName }) => {
  return (
    <header className="bg-dark text-light text-center py-4 w-100 border-bottom border-secondary">
      <div className="container">
        <h1 className="display-5 mb-2">Portfolio de {studentName}</h1>
        <hr
          className="bg-secondary mx-auto"
          style={{ width: "60px", height: "3px" }}
        />
      </div>
    </header>
  );
};

export default Header;
