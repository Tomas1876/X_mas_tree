import React from "react";
import styled from 'styled-components';
import TreeColumn from "./TreeColumn";

const TreeRowBlock = styled.li`
    height: 30px;
    margin: auto;
    display: table;
`;

const TreeRow =({column, isLast})=>{
    
    const renderTree = (column) =>{
        const span = [];
         for(let i = 1; i <= column; i++){
            span.push(<TreeColumn order={i} key={i} isEdge={i == column} isLast={isLast}/>);
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