import { useEffect, useState, useContext } from "react";
import styles from "./Card.module.css";
import api from "../../services/api";
import ThemeContext, { themes } from '../../contexts/theme-context';


const Card = () => {

    const [dentistas, setDentistas] = useState([]);

    const {theme, handleChangeTheme} = useContext(ThemeContext);

    async function getDentistas() {
        try {
            const response = await api.get('/dentista');
            setDentistas(response.data);
          
          } catch (error) {
          
            console.log(error);
          }
      }


      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto 
        Fazer depois do teste
        */}


      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>

          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}

              <a href={`/detail/${dentista.matricula}`}>
              <h5 className={`card-title ${styles.title}`}>{dentista.nome}</h5>
              <p className={`card-title ${styles.title}`}>@{dentista.usuario.username}</p>
              </a>
        </div>
      </div>
  );
};

export default Card;