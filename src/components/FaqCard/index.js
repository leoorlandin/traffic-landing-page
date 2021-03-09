import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const FaqCard = ({ textContent, cardDescription }) => {

  const [openCard, setOpenCard] = useState('add');

  const handleOpenCardButton = () => {
    setOpenCard(openCard === 'add' ? 'remove' : 'add');
  }

  return (

    <S.FaqCard>
      <S.FaqContent>
        {textContent}
        <i
          className="material-icons"
          onClick={handleOpenCardButton}
        >
          {openCard}
        </i>
      </S.FaqContent>

      {
        openCard === 'remove' ?
          <S.cardDescription>
            {cardDescription}
          </S.cardDescription>
          :
          <></>
      }

    </S.FaqCard>
  );
};

export default FaqCard;

FaqCard.propTypes = {
  textContent: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
};
