import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./Form.module.css";
import api from '../../services/api';
// import { ThemeContext } from '../../Contexts/ThemContext';
import { useAuth } from '../../Contexts/AuthContext';

// Adicione seu context de tema aqui

const LoginForm = () => {
  const authState = useAuth()
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const handleLoginFormUserName = (e) => {
    setUsername(e.target.value)
  }
  const handleLoginFormPassword = (e) => {
    setPassword(e.target.value)
  }

  // const { theme } = React.useContext(ThemeContext); // Use o context de tema aqui
  const theme = ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = {
      username: username,
      password: password,
    }
    try {
      setLoading(true)
      const response = await api('auth', '/auth', login);
      setTimeout(() => {
        console.log("Token", response)
        if (!response) {
          authState.removeUserTokenLocalStorage()
          alert('Erro ao efetuar Login, tente novamente!');
          setUsername('')
          setPassword('')
          setLoading(false)
        }
        if (response) {
          authState.saveUserTokenLocalStorage(response);
          navigate('/home');
          alert('Login efetuado com sucesso!');
          setLoading(false)
        }
      }, 3000)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div
        className={`text-center card container ${styles.card} ${theme === 'dark' ? styles.dark : styles.light}`} // Estilos condicionais para dark e light mode
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              value={username}
              onChange={handleLoginFormUserName}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              value={password}
              onChange={handleLoginFormPassword}
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
            {loading && <p>Carregando...</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

