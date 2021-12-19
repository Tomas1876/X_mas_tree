import React from "react";
import styled from 'styled-components';
import '../style/tree.css';

const TreeColumnBlock = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #130402; 
    background-color: #334d10;
    display: table-cell;
    :after {
        content: "";
        display: block;
        width: 20px;
        border-bottom: 3px dotted #fbd755;
        position: relative;
        top: -4px;
        right: -15px;
    }
`;
const TreeColumnBlockEdge = styled.span`
    width: 30px;
    height: 30px;
     border: 1px solid #130402; 
    background-color: #334d10;
    display: table-cell;
    :after {
        content: "";
        display: block;
        width: 15px;
        border-bottom: 3px dotted #fbd755;
        position: relative;
        top: -4px;
        right: -15px;
    }
`;
const TreeColumnLastLine = styled.span`
    width: 30px;
    height: 30px;
     border: 1px solid #130402; 
    background-color: #334d10;
    display: table-cell;
    border-bottom: 3px dotted #fbd755;
    :before {
        content: "";
        display: block;
        width: 18px;
        border-top: 3px dotted #fbd755;
        position: relative;
        top: -4px;
        right: -15px;
    }
`;
const TreeBlockDeco = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #130402; 
    border-left: 3px dotted #fbd755;
    border-bottom: 3px dotted #fbd755;
    background-color: #334d10;
    display: table-cell;
`;

const TreeColumn =({order, isEdge, isLast})=>{
    
    if(order % 2 == 1){
        return <TreeBlockDeco className="TreeBlockDeco" />
    } else {
        if(isLast){
            return <TreeColumnLastLine className="TreeColumnLastLine" />
        } else {
            if(isEdge){
                return <TreeColumnBlockEdge className="TreeColumnBlockEdge" />
            } else {
                return <TreeColumnBlock />
            }
        }
    }

}

export default TreeColumn;