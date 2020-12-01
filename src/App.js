import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
  width: auto;
  text-align: center;
`;

const ListItem = styled.li`
  
`;

function App() {

  const [list, setList] = useState([]);

  useEffect(()=>{
    setList([
      {title: 'Tomar Café', done:false},
      {title: 'Almoçar', done:false},
      {title: 'Jantar', done:true}
    ]);

  },[]);

  return (<div className='page'>
    <Title>Lista de Tarefas</Title>
    <hr/>
    <ol>
      {list.map((item, index)=>{
        return(
        <ListItem key={index}>{item.title}</ListItem>
        //sempre que usamos a função map obragatoriamente temos que definir uma key
        );
      })}
    </ol>

  </div>);
   
}

export default App;
