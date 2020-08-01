import styled from 'styled-components';

export const StyledUl = styled.ul`

  min-width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

export const HeaderLinks = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 245px;

  & a{
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    margin-left: 5px;
  }
`;