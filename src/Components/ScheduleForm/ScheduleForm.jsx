import React from "react";
import styles from "./ScheduleForm.module.css";
import { DentistContext } from "../../Contexts/DentistContext";
import api from "../../services/api";
import { useAuth } from "../../Contexts/AuthContext";

const ScheduleForm = () => {
  const { getUserTokenLocalStorage } = useAuth()
  const token = getUserTokenLocalStorage()
  const { dentists } = React.useContext(DentistContext)
  const [patients, setPatients] = React.useState([]);

  const fetchPacientes = async () => {
    const response = await api('getAllPacients', "/paciente")
    const allPatients = response.data.body
    if (allPatients) setPatients(allPatients)
  };
  React.useEffect(() => {
    fetchPacientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const dentistId = form.get("dentist")
    const patientId = form.get("patient")
    const appointmentDate = form.get("appointmentDate")
    const selectedPatient = patients.find((patient) => patient.matricula === patientId)
    const selectedDentist = dentists.find((dentist) => dentist.matricula === dentistId)

    const appointment = {
      paciente: {
        nome: selectedPatient.nome,
        sobrenome: selectedPatient.sobrenome,
        matricula: selectedPatient.matricula,
        usuario: {
          username: selectedPatient.usuario.username,
        },
        endereco: {
          id: selectedPatient.endereco.id,
          logradouro: selectedPatient.endereco.logradouro,
          numero: selectedPatient.endereco.numero,
          complemento: selectedPatient.endereco.complemento,
          bairro: selectedPatient.endereco.bairro,
          municipio: selectedPatient.endereco.municipio,
          estado: selectedPatient.endereco.estado,
          cep: selectedPatient.endereco.cep,
          pais: selectedPatient.endereco.pais,
        },
        dataDeCadastro: selectedPatient.dataDeCadastro,
      },
      dentista: {
        nome: selectedDentist.nome,
        sobrenome: selectedDentist.sobrenome,
        matricula: selectedDentist.matricula,
        usuario: {
          username: selectedDentist.usuario.username,
        },
      },
      dataHoraAgendamento: appointmentDate,
    };

    console.log(JSON.stringify(appointment))
    const response = await api('post', '/consulta', appointment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("Consulta Response", response)
  };

  return (
    <>
      <div className={`text-center container`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {dentists.map((dentist) => (
                  <option key={dentist.matricula} value={dentist.matricula}>
                    {dentist.nome} {dentist.sobrenome}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select className="form-select" name="patient" id="patient">
                {patients && patients.map((patient) => (
                  <option key={patient.matricula} value={patient.matricula}>
                    {patient.nome} {patient.sobrenome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Data
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={`btn btn-light ${styles.button}`}
              type="submit"
            >
              Marcar Consulta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
