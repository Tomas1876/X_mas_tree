import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 300px;
    height: 80px;
    box-sizing: border-box;
    border: 3px solid #334d10;
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    color: #fff;
    font-size: 32px;
    text-align: center;
    letter-spacing: 20px;
  
    :focus {
        border: 3px solid #aa1c20;
    }
`;

const StyledButton = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #aa1c20;
    outline: none;
    border: none;
    color: #fff;
    text-align: center;
    display: block;
    margin: 20px auto;
    :disabled {
        background-color: #4e341d;
    }
`;

const Form =({changeNumber})=> {

    const numberInput = useRef();
    const submitButton = useRef();
    //submitButton.current.disabled = true;
    const [number, setNumber] = useState();

    const onChange =(e)=> {
      
        const _value = e.target.value;
        setNumber(_value);
        if(_value <= 0){
            submitButton.current.disabled = true;
            return;
        }
        
        submitButton.current.disabled = false;
    }
    const onClick =()=>{
        
        if(isNaN(number)){
            alert('숫자를 입력해주세요!');
            setNumber('');
            return;
        }
        changeNumber(numberInput.current.value);
    }
    
    return (
        <>
            <StyledInput type="text" onChange={onChange} ref={numberInput} value={number}/>
            <StyledButton onClick={onClick} ref={submitButton}>확인</StyledButton>  
        </>
    );
}

export default Form;