import React from 'react'
import styles from "./Card.module.css";
import { DentistContext } from '../../Contexts/DentistContext';
import { Link, createSearchParams } from 'react-router-dom';

const Card = () => {
  // const { darkMode } = useContext(ThemeContext);
  const { dentists } = React.useContext(DentistContext)

  return (
    <>
      {dentists.map((dentist) => (
        <div key={dentist.matricula} className={styles.card}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body`}>
            <Link to={{ pathname: "/dentista", search: `?matricula=${createSearchParams(`${dentist.matricula}`)}` }}>
              <h5 className="card-title">
                {dentist.nome} {dentist.sobrenome}
              </h5>
              <p className={`card-title ${styles.title}`}>@{dentist.usuario.username}</p>
            </Link>
          </div>
        </div >
      ))}
    </>
  );
};

export default Card;
