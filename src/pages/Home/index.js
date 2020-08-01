import React from 'react';

import * as S from './styles';

import Scene from '../../assets/Scene.svg';

import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <S.MainBanner>
      <Header />
        <img src={Scene} alt="background banner" />
        <S.BannerContent>
          <h1>Elo</h1>
          <PrimaryButton width={220} height={60} textContent="GET STARTED"></PrimaryButton>
        </S.BannerContent>
      </S.MainBanner>
    </>
  );
};

export default Home;