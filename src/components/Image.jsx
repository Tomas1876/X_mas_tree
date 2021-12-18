import React from "react";
import styled, {css} from 'styled-components';

const ImgBlock = styled.div`
    width: 50px;
    ${props => props.big && css`
        width: 200px;
    `}
    margin: 0 auto;
    img {
        width: 100%;
    }
`;

const Img = ({img}) =>{

    const path = `img/${img}.png`;
    return (
        <>
            <ImgBlock>
                <img src={path} alt="이미지"/>
            </ImgBlock>
        </>
    );
}

export default Img;