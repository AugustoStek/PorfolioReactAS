import React from "react";

const MainHome = ({ studentData }) => {
  // Imagen y datos por defecto mientras no llega studentData
  const defaultData = {
    firstName: "Augusto",
    lastName: "Stekelberg",
    description: "Estudiante de programación",
    skills: "C#, .NET, Winform, html, CSS, JavaScript, Mysql, Neo4j",
    image: "/augusto.jpg",
  };

  const dataToShow = studentData || defaultData;

  return (
    <main className="d-flex justify-content-center align-items-center flex-column flex-grow-1 main-dark">
      <div
        className="card text-center shadow-lg p-4 bg-secondary bg-gradient border-0"
        style={{ maxWidth: "22rem" }}
      >
        <img
          src={dataToShow.image}
          className="card-img-top rounded-circle mx-auto mb-3"
          alt="Profile"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="card-title text-light fw-bold">
            {`${dataToShow.firstName} ${dataToShow.lastName}`}
          </h2>
          <p className="card-text text-light">{dataToShow.description}</p>
          <h5 className="mt-4 text-info">Skills</h5>
          <p className="card-text text-light">{dataToShow.skills}</p>
        </div>
      </div>
    </main>
  );
};

export default MainHome;
