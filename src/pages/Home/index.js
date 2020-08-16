import React from 'react';

import * as S from './styles';

import PrimaryButton from '../../components/PrimaryButton'

// import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <S.MainBanner>
        <Header />
        <S.BannerContent>
          <h1>Your awesome traffic permit consultant.</h1>
          <PrimaryButton width={220} height={60} textContent="GET STARTED" ButtonAsset="arrow_right_alt"></PrimaryButton>
        </S.BannerContent>
      </S.MainBanner>
    </>
  );
};

export default Home;