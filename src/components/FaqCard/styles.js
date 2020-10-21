import styled, { keyframes } from 'styled-components';



const showAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40%)
  }
  to{
    opacity: 1;
    transform: translateY(0)

  }
`;

export const FaqCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  max-height: 250px;
`;

export const FaqContent = styled.div`

  padding: 25px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  color: #402B2B;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);

  font-family: Rubik;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;

  i {
    color: red;
    cursor: pointer;
    outline: none;
  }
`;

export const cardDescription = styled.div`
  max-width: 550px;
  display: flex;
  padding: 45px 35px;
  align-items: center;
  background: linear-gradient(180deg, rgba(252,221,212,1) 20%, rgba(255,255,255,1) 100%);
  border-radius: 0 0 10px 10px;

  font-family: Rubik;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  color: #402B2B;
  box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
  animation: ${showAnimation} .5s linear;
`;

