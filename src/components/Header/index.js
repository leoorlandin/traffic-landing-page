import React from 'react';

import * as S from './styles';

import TraficoLogo from '../../assets/TraficoLogo.svg';

import PrimaryButton from '../PrimaryButton';

const Header = () => {
  return (
    <S.StyledUl>
      <a href="/"><img src={TraficoLogo} alt="Trafico Logo" /></a>

      <S.HeaderLinks>
        <a href="/">about</a>
        <a href="/">how to</a>
        <a href="/">faqs</a>
      </S.HeaderLinks>
      <PrimaryButton width={158} height={60} textContent="contact us" />

    </S.StyledUl>
  );
};

export default Header;