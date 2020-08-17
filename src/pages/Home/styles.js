import styled from 'styled-components';

import Scene from '../../assets/Scene.svg';


export const MainBanner = styled.div`
  background-image: url(${Scene});
  height: 1200px;
  background-repeat: no-repeat;
`;


export const BannerSection = styled.div`

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


export const AboutSection = styled.div`
`;

export const AboutTexts = styled.div`
`;
