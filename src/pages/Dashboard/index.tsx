import React, { useState, useEffect, FormEvent } from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Info, Error } from './styles';

//API
import api from '../../services/api';

interface  Alunos{
  ID: string;
  RA: string;
  Nome: string;
  Turma: string;
  PERIODO: string;
  Unidade: string;
  Sala: string;
  Professor: string;
  DIAS_DA_SEMANA: string;
  Data_Inicio: string;
  Data_Fim: string;
  Sigla: string;
  Livro: string;
};


const Dashboard: React.FC =  () => {
  //estado da pesquisa
  const [novoAluno, setNovoAluno] = useState('');
  //estado de erro da pesquisa
  const [inputError, setInputError] = useState('');
  //Estado de alunos
  const [alunos, setAlunos] = useState <Alunos[]>(() => {
    const storagedAlunos = localStorage.getItem('@ctjWelcome:alunos');

    if (storagedAlunos) {
      return JSON.parse(storagedAlunos);
    }else{
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@ctjWelcome:alunos', JSON.stringify(alunos));
  }, [alunos]);

 
  async function adicionarAluno(event: FormEvent<HTMLFormElement>): Promise<void> {
    //evita o recarregamento da página ao clicar no botão de pesquisa.
    event.preventDefault(); 
    //verificando se o valor enviado pelo form não é vazio.
    if (!novoAluno) {
      setInputError('Digite um RA ou nome válido');
      return;
    }
    try{
      //adicionar o aluno
      //consumir api de consulta SQL
      //salvar o novo aluno no estado
      const response = await api.get(`/framework/v1/consultaSQLServer/RealizaConsulta/WS.00001/1/S/?parameters=TEXTO_S=${novoAluno}`);
    
      const aluno = (response.data);

      // setAlunos([...alunos, aluno]);
      setAlunos(aluno);
      // console.log(alunos);

      
      setNovoAluno('');
      setInputError('');
 
    }catch (err) {
      setInputError('Erro na busca por este aluno!')
    }    
  }
  
  return (
    <>
        <img src={logoImg} width="550" alt="Casa Thomas Jefferson"/>       
        <Title>Welcome!</Title>

        <Form hasError={!!inputError} onSubmit={adicionarAluno}>
          <input value={novoAluno} 
          onChange={e => setNovoAluno(e.target.value)}
          placeholder="Digite o RA ou nome do aluno"/>
          <button type="submit">Pesquisar</button>
        </Form>

        { inputError && <Error>{inputError}</Error>}

        <Info>
          {alunos.map(aluno => (
            <a key={aluno.ID} href="/">
            <ul>
              <li>
                <strong>{aluno.Nome}</strong>
                <p>Nome</p>
              </li>
            </ul>
            <ul> 
              <li>
                <strong>{aluno.PERIODO}</strong>
                <p>Disciplina</p>
              </li>
            </ul>
            <ul>
              <li>
                <strong>{aluno.Data_Inicio}</strong>
                <p>Data de Início</p>
              </li>
            </ul>
            <ul>
              <li>
                <strong>{aluno.Unidade}</strong>
                <p>Campus</p>
              </li>
            </ul>
            <ul>
              <li>
                <strong>{aluno.Livro}</strong>
                <p>Livro</p>
              </li>
            </ul> 
          </a>
          ))}
          
        </Info>
       </> 
    
  )
};

export default Dashboard;

 