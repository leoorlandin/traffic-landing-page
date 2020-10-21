import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const FaqCard = ({ textContent }) => {

  const [openCard, setOpenCard] = useState('add');

  const handleOpenCardButton = () => {
    setOpenCard(openCard === 'add' ? 'remove' : 'add')
  }


  return (
    <S.FaqCard>
      {textContent}
      <i
        className="material-icons"
        onClick={handleOpenCardButton}
      >
        {openCard}
      </i>
    </S.FaqCard>
  );
};

export default FaqCard;

FaqCard.propTypes = {
  textContent: PropTypes.string.isRequired,
};

