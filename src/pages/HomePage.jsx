import React from 'react'
import styled from 'styled-components';
import Form from '../components/Form';
import Img from '../components/Image';

const HomeContainer = styled.div`
  width:100%;
  height:100%;
  text-align:center;
  color: #fff;
  padding-top: 200px;
  margin-top: 100px;
`;

const HomePage = ({changeNumber}) => {
    return (
        <HomeContainer>
            <Img img={'star'} big />
            <h3>갖고 싶은 트리의 크기를 입력하세요</h3>
            <Form changeNumber={changeNumber}/>
        </HomeContainer>
    );
}

export default HomePage;