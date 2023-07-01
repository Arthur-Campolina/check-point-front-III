import React from "react";
import styles from "./ScheduleForm.module.css";
import { DentistContext } from "../../Contexts/DentistContext";
import api from "../../services/api";

const ScheduleForm = () => {
  const { dentists } = React.useContext(DentistContext)
  const [patients, setPatients] = React.useState([]);
  const [patientInput, setPatientInputValue] = React.useState({})
  const [dentistInput, setDentistInputValue] = React.useState({})
  const [dateInput, setDateInputValue] = React.useState({})

  const onChangePatientHandle = (event) => {
    console.log("Input", event.target.value)
    setPatientInputValue(event.target.value)
  }
  const onChangDentistHandle = (event) => {
    setDentistInputValue(event.target.value)
  }
  const onChangeDateInput = (event) => {
    console.log(event.target.value)
    setDateInputValue(event.target.value)
  }

  const fetchPacientes = async () => {
    const response = await api('getAllPacients', "/paciente")
    const allPatients = response.data.body
    if (allPatients) setPatients(allPatients)
  };
  React.useEffect(() => {
    fetchPacientes();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dateInput)

    const appointment = {
      paciente: patientInput,
      dentista: dentistInput,
      dataHoraAgendamento: dateInput,
    };
    const response = await api('post', '/consulta', appointment)
    if (response.status === 200) alert('Consulta marcada com sucesso!')
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
                  <option key={dentist.matricula} value={dentistInput} onChange={onChangDentistHandle}>
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
                  <option key={patient.matricula} value={patientInput} onChange={onChangePatientHandle}>
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
                value={dateInput}
                onChange={onChangeDateInput}
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
