import React from "react";
import { DentisContext } from "../Contexts/DentistContext";
import Card from "../Components/Card/Card";
import '../index.css'

const Home = () => {
  const { dentists } = React.useContext(DentisContext)

  return (
    <>
      <h1>Home</h1>
      {dentists.map((dentist) => (
        <div className="card-grid" key={dentist.matricula}>
          <Card dentist={dentist} />
        </div>
      ))}
    </>
  );
};

export default Home;
