import React from "react";
import styled from 'styled-components';
import TreeColumn from "./TreeColumn";

const TreeRowBlock = styled.li`
    height: 50px;
    border: 1px solid #130402;
    margin: auto;
    display: table;
`;

const TreeRow =({column})=>{
        const renderTree = (column) =>{
        const span = [];
         for(let i = 1; i <= column; i++){
            span.push(<TreeColumn key={i}/>);
        }
        return span;
    }
    return(
        <TreeRowBlock>
            {renderTree(column)}
        </TreeRowBlock>
    );
}

export default TreeRow;