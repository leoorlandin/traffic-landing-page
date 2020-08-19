import React from 'react';

import * as S from './styles';

import PrimaryButton from '../../components/PrimaryButton'

import Header from '../../components/Header';

import Illustration from '../../assets/Illustration.svg';
import HowToIllustration from '../../assets/HowToIllustration.svg';

const Home = () => {
  return (
    <>
      <S.MainBanner>
        <Header />
        <S.BannerSection>
          <h1>Your awesome traffic permit consultant.</h1>
          <PrimaryButton width={220} height={60} textContent="GET STARTED" ButtonAsset="arrow_right_alt"></PrimaryButton>
        </S.BannerSection>
      </S.MainBanner>

      <S.AboutSection>
        <S.AboutTexts>
          <h2>about us</h2>
          <p>The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>
          <p>How do you do when you need to obtain
          a commercial traffic permit for freight transport to your business?</p>
        </S.AboutTexts>
        <img src={Illustration} alt="About us section Illustration" />
      </S.AboutSection>

      <S.HowToSecton>
        <img src={HowToIllustration} alt="Illustration of section how to" />

        <S.HowToTexts>
          <h2>how to apply</h2>
          <p>When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
        </S.HowToTexts>
      </S.HowToSecton>

    </>
  );
};

export default Home;