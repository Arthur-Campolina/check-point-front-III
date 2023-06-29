import React from "react";
import Card from "../Components/Card";
import axios from "axios";

const Home = () => {
  const [dentists, setDentists] = React.useState([])
  async function fetchDentists() {
    try {
      const response = await axios('https://dhodonto.ctdprojetointegrador.com/dentista')
      if (!response) {
        console.error("No dentists were found!", response)
        return
      }
      setDentists(response.data)
    } catch (error) {
      console.error("Error to fecth dentists", error)
    }
  }
  React.useEffect(() => {
    fetchDentists()
  }, []);

  return (
    <>
      <h1>Home</h1>
      {dentists.map((dentist) => (
        <div className="card-grid container">
          <Card key={dentist.matricula} dentist={dentist} />
        </div>
      ))}
    </>
  );
};

export default Home;
