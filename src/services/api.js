import axios from "axios";
const baseURL = "https://dhodonto.ctdprojetointegrador.com"

const api = async (method, endpoint, body, headers) => {
  try {
    if (method === "getAllDentists") {
      const path = baseURL + `${endpoint}`
      const response = await axios(path)
      return response.data
    }
    if (method === "getAllPacients") {
      const path = baseURL + `${endpoint}`
      const response = await axios(path)
      return response
    }
    if (method === "getById") {
      const path = baseURL + `${endpoint}`
      const response = await axios(path)
      return response.data
    }
    if (method === "auth") {
      const path = baseURL + `${endpoint}`
      const response = await axios.post(path, body)
      return response.data.token
    }
    if (method === "post") {
      const path = baseURL + `${endpoint}`
      if (headers) {
        const response = await axios.post(path, body, headers)
        return response.data
      }
      const response = await axios.post(path, body)
      return response.data

    }
  } catch (error) {
    console.error("Erro ao conectar com a API")
  }

}

export default api;