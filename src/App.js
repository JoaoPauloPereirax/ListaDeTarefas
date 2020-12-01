import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import './App.css';

const Title = styled.h1`
  width: auto;
  text-align: center;
`;

const ItemList = styled.li`

`;

function App() {
  
  const [list, setList] = useState([]);

  useEffect(()=>{
    setList([
      {tarefa:'Tomar Café', status: false},
      {tarefa:'Almoçar', status: true},
      {tarefa:'Jantar', status: false}
    ]);
  },[]);

  function addAction(newItem){
    let newList = [...list];
    newList.push({tarefa:newItem, status:false});
    setList(newList);

  }
  
  return (<div className='page'> 

    <Title>Lista</Title><hr/>
    <InputBox 
    frasePadrao="Adicione um item"
    onEnter={addAction}
    />

    <ol>

      {list.map((item,index)=>(
      <ItemList key={index}>
        
      {item.status && <del>{item.tarefa}</del>}
      {!item.status && item.tarefa}
      
      </ItemList>))}

    </ol>

  </div>);}

export default App;
