import React from "react";
import styled from 'styled-components';
import Image from "../components/Image";
import TreeRow from "../components/TreeRow";

const TreePage = styled.div`
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
`;

const TreeBottom = styled.div`
    width: 50px;
    height: 100px;
    background-color: #4e341d;
    margin: 0 auto;
`;

const Tree = ({number}) => {
    const layer = number.number / 1;
    const renderTree = (layer) =>{
        const li = [];
         for(let i = 1; i <= layer; i++){
            li.push(<TreeRow column={i} key={i} isLast={i === layer}/>);
        }
        return li;
    }
    return (
        <TreePage>
            <TreeBlock>
                <Image img={'star'} />
                {renderTree(layer)}
                <TreeBottom />
            </TreeBlock>
        </TreePage>
    );
}

export default Tree;