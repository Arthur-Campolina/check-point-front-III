import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./Form.module.css";
import { AuthContext } from '../../Contexts/AuthContext';
import { ThemeContext } from '../../Contexts/ThemContext';
// Adicione seu context de tema aqui

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { saveUserTokenLocalStorage } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); // Use o context de tema aqui
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Faça aqui sua chamada à API de autenticação
      const response = await fetch('/auth', { // Adicione o caminho correto da sua API aqui
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Erro na autenticação');
      }

      const { token } = await response.json();
      saveUserTokenLocalStorage(`Bearer ${token}`);

      // Redireciona o usuário para a página inicial
      navigate('/home');

      // Mostra uma mensagem de sucesso
      alert('Login efetuado com sucesso!');
    } catch (error) {
      // Mostra uma mensagem de erro
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
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

