
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React from "react";
import axios from "axios";
import { DentisContext } from "./Contexts/DentistContext";

function App() {
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
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
        <Navbar />
        <DentisContext.Provider value={dentists}>
          <main>
            <Outlet />
          </main>
        </DentisContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default App;
