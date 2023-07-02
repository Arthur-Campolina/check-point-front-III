import { renderContext, screen } from "../../test-utils"
import Login from '../../../Routes/Login';

test("Deve exibir o formulário de login", () => {
  renderContext(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test("Deve renderizar o campo de entrada de email", () => {
  renderContext(<Login />)
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});

test("Deve renderizar o campo de entrada de senha", () => {
  renderContext(<Login />)
  expect(screen.getByLabelText('Password')).toBeInTheDocument();
});

test("Deve renderizar o link Esqueceu a senha", () => {
  renderContext(<Login />)
  expect(screen.getByText('Forgot password')).toBeInTheDocument();
});

test("Deve renderizar o botão de envio", () => {
  renderContext(<Login />)
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
});
