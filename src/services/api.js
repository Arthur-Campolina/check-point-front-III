import axios from "axios";

const api = axios.create({
  baseURL: "https://dhodonto.ctdprojetointegrador.com/",
});

export default api;