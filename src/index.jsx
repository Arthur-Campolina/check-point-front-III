import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./Routes/Detail";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import "./index.css";
import { AuthProvider, useAuth } from "./Contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <AuthProvider>
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter >
  </AuthProvider>
);

function RootRoutes() {
  const { authenticated } = useAuth()
  if (!authenticated) return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to={"/login"} />} />
    </Routes>
  )
  return (
    <Routes>
      <Route path="/login" element={<Navigate to={"/home"} />} />
      <Route element={<App />}>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dentista" element={<Detail />} />
      </Route>
    </Routes>
  )
}
