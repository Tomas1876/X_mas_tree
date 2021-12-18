import React from "react";
import styled from 'styled-components';

const TreeColumnBlock = styled.span`
    width: 50px;
    height: 50px;
    background-color: #334d10;
    display: table-cell;
`;

const TreeColumn =()=>{
    return(
        <TreeColumnBlock></TreeColumnBlock>
    );
}

export default TreeColumn;