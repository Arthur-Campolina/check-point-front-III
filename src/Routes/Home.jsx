import React from "react";
import Card from "../Components/Card";
import { DentisContext } from "../Contexts/DentistContext";

const Home = () => {
  const dentists = React.useContext(DentisContext)

  return (
    <>
      <h1>Home</h1>
      {dentists.map((dentist) => (
        <div className="card-grid container" key={dentist.matricula}>
          <Card dentist={dentist} />
        </div>
      ))}
    </>
  );
};

export default Home;
