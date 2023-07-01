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
      const response = await api('/auth', login);
      const { token } = await response.json();
      authState.saveUserTokenLocalStorage(`Bearer ${token}`);
      navigate('/home');
      alert('Login efetuado com sucesso!');
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
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

