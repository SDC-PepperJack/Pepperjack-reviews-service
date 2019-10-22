import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 `;


export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: Helvetica-Light;
  font-weight: 500;
  height: 790px;

`;

export const ReviewHeader = styled.div`
  align-items: center;
`;

export const ReviewH4 = styled.h4`
display: flex;
`;

export const ReviewH4Span = styled.span`
margin-left: 5px;
margin-right: 5px;
`;

export const Card = styled.div`
  margin-bottom: 30px;
`;

export const UsernameContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;
`;

export const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;