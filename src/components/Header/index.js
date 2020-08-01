import React from 'react';

import * as S from './styles'

import TraficoLogo from '../../assets/TraficoLogo.svg'

const Header = () => {
  return (
    <S.StyledUl>
      <a href="/"><img src={TraficoLogo} alt="Trafico Logo" /></a>
      
      <S.HeaderLinks>
        <a href="/">about</a>
        <a href="/">how to</a>
        <a href="/">faqs</a>
      </S.HeaderLinks>

    </S.StyledUl>
  );
};

export default Header;