import styled from 'styled-components';

import Scene from '../../assets/Scene.svg';
import Rectangle from '../../assets/Rectangle.svg';

const PrimaryColor = "#EE4D47";
const SecondaryColor = "#FCDDD4";
const TextBodyColor = "#402B2B";

export const MainBanner = styled.div `
  background-image: url(${Scene});
  height: 1200px;
  background-repeat: no-repeat;
`;

export const BannerSection = styled.div `

  display: flex;
  flex-direction: column;
  margin-left: 240px;
  margin-top: 130px;

  h1 {
    font-family: DM Serif Display;
    font-weight: normal;
    line-height: 100%;
    font-size: 100px;
    color: #fff;
    max-width: 740px;
    margin-bottom: 60px;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
  }

  & button i {
    font-size: 40px;
  }
`;

export const AboutSection = styled.div `
  display: flex;
  height: 550;
  align-items: center;
  justify-content: space-between;
  margin: 150px 230px;
`;

export const AboutTexts = styled.div `
  h2 {
    color: ${PrimaryColor};
    text-transform: uppercase;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.1em;
  }

  & :nth-child(2){
      max-width: 470px;
      font-family: Rubik;
      font-size: 18px;
      line-height: 40px;
      color: ${TextBodyColor};
      margin-top: 50px;
      margin-bottom: 100px;
      
  }

  & :nth-child(3){
    max-width: 570px;
    background: ${SecondaryColor};
    border-left: 10px solid ${PrimaryColor};
    font-size: 24px;
    line-height: 36px;
    color: ${TextBodyColor};
    font-family: Rubik;
    font-weight: 500;
    padding: 15px 50px;
    border-radius: 4px;
  }
`;

export const HowToSecton = styled.div `
  display: flex;
  margin: 0 230px 0 130px;
  align-items: center;
  justify-content: space-between;
`;

export const HowToTexts = styled.div `
  h2 {
    color: ${PrimaryColor};
    text-transform: uppercase;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.1em;
  }

  p {
    max-width: 470px;
    font-family: Rubik;
    font-size: 18px;
    line-height: 40px;
    color: ${TextBodyColor};
    margin-top: 50px;
    margin-bottom: 100px;
  }
`;


export const FaqSection = styled.div `
  display: flex;
  flex-direction: column;
  background: url(${Rectangle}) no-repeat right;
  width: 1370px;
  margin-left: auto;
  justify-content: space-between;
  padding: 50px 0;
`;

export const FaqBanner = styled.div `
  display: flex;
  max-height: 700px;

  align-items: center;

  img {
    max-height: 500px;
  }

`;

export const FaqBannerTexts = styled.div `
  display: flex;
  flex-direction: column;

  h1 {
    color: ${PrimaryColor};
    text-transform: uppercase;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.1em;
  }

  h2 {
    width: 550px;
    font-family: 'DM Serif Display';
    font-size: 48px;
    line-height: 67px;
    color: ${TextBodyColor};
    }
`;

export const FaqCards = styled.div `
  display: grid;
  grid-template-columns: 550px 550px;
  grid-gap: 20px;
  margin-top: 50px;

  div + div:last-child{

     div{
      padding: 25px 35px;
      border-radius: 6px;
      opacity: .8;
      background: ${PrimaryColor};
      display: flex;
      justify-content: center;
      color: ${SecondaryColor};
      font-weight: bold;
    }

    p {
      opacity: 1;
      padding: 4px;
    }
    
  }
`;