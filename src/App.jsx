
import { Outlet } from "react-router-dom";

import React from "react";
import { DentistContext } from "./Contexts/DentistContext";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import api from "./services/api";

function App() {
  async function fetchDentists() {
    try {
      const response = await api('getAllDentists', '/dentista')
      if (!response) {
        console.error("No dentists were found!", response)
        return
      }
      if (response) {
        dispatch({
          type: "GET",
          payload: response
        })
      }
    } catch (error) {
      console.error("Error to fecth dentists", error)
    }
  }
  React.useEffect(() => {
    fetchDentists()
  }, []);
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET":
        return action.payload
      case "GET-BY-ID":
        return action.payload
      default:
        return state
    }
  }
  const [dentists, dispatch] = React.useReducer(reducer, [])
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}

      <div className={`app light}`}>
        <Navbar />
        <DentistContext.Provider value={{ dentists, dispatch }}>
          <main>
            <Outlet />
          </main>
        </DentistContext.Provider>
        <Footer />
      </div>
    </>
  );
}

//teste

export default App;
