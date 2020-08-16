import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const PrimaryButton = ({ height, width, textContent, ButtonAsset }) => {
  return (
    <S.PrimaryButton
      height={height}
      width={width}
    >{textContent}

  <i className="material-icons">{ButtonAsset}</i>

    </S.PrimaryButton>
  );
};

export default PrimaryButton;


PrimaryButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  ButtonAsset: PropTypes.string
};

PrimaryButton.defaultProps = {
  height: 60,
  width: 220
};