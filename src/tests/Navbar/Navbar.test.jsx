import Navbar from "../../Components/Navbar"
import { renderContext } from "../test-utils"
import { screen, fireEvent } from "@testing-library/react"

describe ("<Navbar /> Testes da Navbar", () =>{

  test("Botão de troca de modo Dark começou em light-mode", ()=>{
    renderContext(<Navbar/>)
    const button = screen.getByTestId("button-darkMode");
    expect(button).toHaveTextContent("🌙")
  })

  test("Botão de troca de modo Dark mudou para dark-mode", ()=>{
    renderContext(<Navbar/>)
    const button = screen.getByTestId("button-darkMode");
    fireEvent.click(button)
    expect(button).toHaveTextContent("☀")
  })

  test("Navbar contém o logo", () => {
    renderContext(<Navbar/>)
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  })

  test("Navbar contém um link 'Home'", () => {
    renderContext(<Navbar/>)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  })

  test("Navbar contém um link 'Sobre'", () => {
    renderContext(<Navbar/>)
    expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
  })

  test("Navbar contém um link 'Contato'", () => {
    renderContext(<Navbar/>)
    expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
  })

  test("Navbar contém um link 'Login'", () => {
    renderContext(<Navbar/>)
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
  })
  
})
