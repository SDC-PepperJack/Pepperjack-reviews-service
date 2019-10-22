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


export const AvatarContainer = styled.div`
display: flex;
flex-direction: column;
padding-top: 5px;
padding-left: 8px;
`;

export const UserNameDateDiv = styled.div`
display: flex;
`;


export const UserNameATag = styled.a`
color: rgb(34, 34, 34);
`;


export const ReviewDate = styled.div`
padding-left: 10px;
`;


export const ReviewStars = styled.h2`
margin: 0px;
padding-top: 5px;
`;

export const ReviewComment = styled.p`
margin-top: 0px
font-size: 14px
`;

export const PhotoInComment = styled.img`
height: 300px;
width: 300px;
`;


export const ItemContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 58px;
font-size: 14px;
margin-top: 10px;
`;

export const ItemPhoto = styled.img`
width: 75px;
height: 75px
`;


export const ItemLink = styled.a`
padding-top: 25px;
padding-left: 10px;
text-overflow: ellipsis;
width: 370px;
overflow: hidden;
white-space: nowrap;
font-size: 12px;
font-weight: 300;
line-height: 1.5;
`;


export const ModalOverlay = styled.div`
display: none;
width: 100%;
height: 100%;
position: fixed;
z-index: 10;
top: 0px;
left: 0px;
opacity: 0;
transition: opacity 0.5s linear;
`;

export const Modal = styled.div`
display: none;
position: fixed;
left: 50%;
top: 22%;
transform: translate(-50%, -50%);
max-height: 656.672px;
max-width: 1200px;
height: 40%;
width: 80%;
z-index: 10;
`;

export const ModalWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;
`;

export const ModalImgContainer = styled.div`
display: flex
order: 1
`;