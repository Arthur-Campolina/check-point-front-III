import React from "react";
import styles from "./DetailCard.module.css";
import { useLocation } from "react-router-dom"; // Importe o hook useParams
import ScheduleFormModal from "../ScheduleFormModal/ScheduleFormModal";
import api from "../../services/api";

const DetailCard = () => {
  const [dentist, setDentist] = React.useState({});
  const [loading, setIsloading] = React.useState("Loading...")
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('matricula').substring(0, 36)
  React.useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await api('getById', `/dentista?matricula=${id}`);
        console.log('response', response)
        setDentist(response)
        if (response) setIsloading("")
      } catch (error) {
        console.erro('Erro ao buscar dados do dentista', error);
        // Trate o erro de acordo com sua necessidade
      }
    };
    fetchDentist()
  }, [id])

  return (
    <> {!loading &&
      <div>
        <h1>Detail about Dentist {dentist.nome} </h1>
        <section className="card col-sm-12 col-lg-6 container">
          <div className={`card-body row`}>
            <div className="col-sm-12 col-lg-6">
              <img
                className="card-img-top"
                src="/images/doctor.jpg"
                alt="doctor placeholder"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <ul className="list-group">
                <li className="list-group-item">Nome: {dentist.nome}</li>
                <li className="list-group-item">
                  Sobrenome: {dentist.sobrenome}
                </li>
                <li className="list-group-item">
                  Usuário: {dentist.usuario.username}
                </li>
              </ul>
              <div className="text-center">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className={`btn btn-light ${styles.button}`}
                >
                  Marcar consulta
                </button>
              </div>
            </div>
          </div>
        </section>
        <ScheduleFormModal />
      </div>
    }
    </>
  );
};


export default DetailCard;
