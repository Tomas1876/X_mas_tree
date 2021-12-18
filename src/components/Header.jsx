import styled from 'styled-components';

const HeaderBlock = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:100px;
  background: #aa1c20;
  margin:0;
  padding:0;
  padding-top: 30px;
  color: #fff;
  font-size: 28px;
  text-align: center;
`;

const Header = ()=>{
    return (
        <>
            <HeaderBlock>
                HAPPY X-MAS!
            </HeaderBlock>
        </>
    );
}

export default Header;