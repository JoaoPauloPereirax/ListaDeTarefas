import React, {useState} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
border: 2px solid #000;
border-radius: 5px;
padding: 10px;
font-size: 17px;
width: 300px;
margin: 5px;
`;

function InputBox(props){

    const [texto, setTexto] = useState('');

    function handKeyUp(e){
        if(e.keyCode == 13){
            if(props.onEnter){
                props.onEnter(texto);
            }
            setTexto('');
        }
    }



    return (<InputText
        type="text"
        value={texto}
        onChange={(e)=>setTexto(e.target.value)}
        placeholder={props.frasePadrao}
        onKeyUp={handKeyUp}
        />);
}

export default InputBox;
