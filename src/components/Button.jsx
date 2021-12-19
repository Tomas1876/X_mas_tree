import React from "react";
import styled from 'styled-components';

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

const CustomButton = ({text}) => {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    );
}

export default CustomButton;