import styled from 'styled-components';

export const StyledUl = styled.ul`

  padding: 40px 240px 0 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const HeaderLinks = styled.div`
    display: flex;
    align-items: center;

  & a{
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Rubik';
    letter-spacing: 0.05em;
    text-decoration: none;
    margin-right: 80px;
  }

  & :nth-child(3){
    margin-right: 110px;
  }
`;