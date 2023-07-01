import React, { useState, useEffect } from 'react';
import QuerieCard from '../Components/Querie/QuerieCard';
import api from '../services/api';

export default function Queries() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await api.get('/consulta');
      setData(response.data);
    } catch (error) {
      setError('Ocorreu um erro ao buscar os dados da API.');
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {data.map((dados) => (
          <QuerieCard
            agendamento={dados.dataHoraAgendamento}
            nomeDentista={dados.dentista.nome}
            nomePaciente={dados.paciente.nome}
            sobrenomeDentista={dados.dentista.sobrenome}
            sobrenomePaciente={dados.paciente.sobrenome}
            key={dados.paciente.matricula}
          />
        ))}
      </ul>
    </div>
  );
}
