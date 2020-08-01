import styled from 'styled-components';

export const PrimaryButton = styled.button`
  color: #FFF;
  background: #EE4D47;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 5px;
  border: none;
  font-weight: 500;
  text-transform: uppercase;
`;