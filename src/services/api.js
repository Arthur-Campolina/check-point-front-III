import axios from "axios";
const baseURL = "https://dhodonto.ctdprojetointegrador.com"

const api = async (method, endpoint, body) => {

  try {
    if (method === "getAllDentists") {
      const path = baseURL + `${endpoint}`
      const response = await axios(path)
      return response.data
    }
    if (method === "getById") {
      const path = baseURL + `${endpoint}`
      const response = await axios(path)
      return response.data
    }
  } catch (error) {
    console.error("Erro ao conectar com a API")
  }

}

export default api;