import styled from 'styled-components';


export const StyledUl = styled.ul`

  padding: 50px 0 0 240px;
  max-width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const HeaderLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

  & a{
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Rubik';
    letter-spacing: 0.05em;
    text-decoration: none;
    margin-left: 150px;
  }
`;