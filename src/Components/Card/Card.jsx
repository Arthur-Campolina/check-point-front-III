import styles from "./Card.module.css";

const Card = ({ dentist }) => {
  console.log("Dentista", dentist)

  return (
    <div >
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className={`card-body ${styles.CardBody}`}>
        {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
        <h5 className={`card-title ${styles.title}`}>{dentist.nome}</h5>
        <p className={`card-title ${styles.title}`}>@{dentist.usuario.username}</p>
        <button onClick={() => console.log(dentist.matricula)}>Mais</button>
      </div>
    </div>
  );
}

export default Card;
