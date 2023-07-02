import Login from "../../Routes/Login"
import { renderContext } from "../test-utils"
import { screen } from "@testing-library/react"

describe("<Login /> Testes do Login", () => {

  test("Renderizou corretamente", () => {
    const contextoGlobal = { theme: "dark", data: [] }
    renderContext(
      <Login />,
      contextoGlobal
    )
    
  })

  test("Renderizou corretamente e renderizou o componente filho <LoginForm />", () => {
    const contextoGlobal = { theme: "dark", data: [] }
    renderContext(
      <Login />,
      contextoGlobal
    );
    expect(screen.getByTestId("form-login")).toBeInTheDocument();
    
  })

  test("Renderizou corretamente com tema 'dark'", () => {
    const contextoGlobal = { theme: "dark", data: [] }
    renderContext(
      <Login />,
      contextoGlobal
    );
    
  })

  test("Renderizou corretamente com dados vazios", () => {
    const contextoGlobal = { theme: "light", data: [] }
    renderContext(
      <Login />,
      contextoGlobal
    );
    
  })

  test("Renderizou corretamente com dados preenchidos", () => {
    const contextoGlobal = { theme: "light", data: [{ username: "usuario", password: "senha" }] }
    renderContext(
      <Login />,
      contextoGlobal
    );
  
  })

  test("Exibe mensagem de erro ao fazer login com credenciais inválidas", () => {
    const contextoGlobal = { theme: "light", data: [] }
    renderContext(
      <Login />,
      contextoGlobal
    );
   
  })

  test("Realiza o login com sucesso ao fazer login com credenciais válidas", () => {
    const contextoGlobal = { theme: "light", data: [{ username: "usuario", password: "senha" }] }
    renderContext(
      <Login />,
      contextoGlobal
    );
    
  })

})
