import styled from 'styled-components';

export const MainBanner = styled.div`
  min-height: auto;


  ul {
    position: absolute;
    top: 40px;
  }

`;


export const BannerContent = styled.div`

  min-height: auto;
  display: flex;
  position: absolute;

h1 {
  color: green;
  font-size: 60px;
}

button {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & i {
    font-size: 46px;
  }
}
`;
