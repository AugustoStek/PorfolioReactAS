import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

const Home = () => {
  const student = {
    firstName: "Augusto",
    lastName: "Stekelberg",
    description:
      "Estudiante de segundo año de TUP, trabajador de Scania y tarotista",
    languages: "C#, .NET, Mysql, Neo4j",
  };

  return (
    <div>
      <Header studentName={`${student.firstName} ${student.lastName}`} />
      <MainHome data={student} />
      <Footer />
    </div>
  );
};

export default Home;
