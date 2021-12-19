import React from "react";
import styled from 'styled-components';
import Image from "../components/Image";
import TreeRow from "../components/TreeRow";

const TreeContainer = styled.div`
  width:100%;
  height:100%;
  text-align:center;
  color: #fff;
  padding-top: 50px;
  margin-top: 100px;
`;

const TreeBlock = styled.ul`
    width: 100%;
    text-align:center;
    padding: 0;
`;

const TreeBottom = styled.div`
    width: 50px;
    height: 100px;
    background-color: #4e341d;
    margin: 0 auto;
`;
const StyledButton = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #aa1c20;
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    text-align: center;
    display: block;
    margin: 50px auto;

`;
const TreePage = ({number, onClick}) => {
    const layer = number.number / 1;
    const renderTree = (layer) =>{
        const li = [];
         for(let i = 1; i <= layer; i++){
            li.push(<TreeRow column={i} key={i} isLast={i === layer}/>);
        }
        return li;
    }

    return (
        <>
        <TreeContainer>
            <TreeBlock>
                <Image img={'star'} />
                {renderTree(layer)}
                <TreeBottom />
            </TreeBlock>
        </TreeContainer>
        <StyledButton onClick={onClick}>홈으로</StyledButton>
        </>
    );
}

export default TreePage;