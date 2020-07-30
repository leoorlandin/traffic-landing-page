import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const PrimaryButton = ({ height, width, textContent }) => {
  return (
    <S.PrimaryButton
      height={height}
      width={width}
    >{textContent}

    </S.PrimaryButton>
  );
};

export default PrimaryButton;


PrimaryButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
};

PrimaryButton.defaultProps = {
  height: 60,
  width: 220
};