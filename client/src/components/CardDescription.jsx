/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

const CardInfoContainer = styled.div`
display:flex;
flex-direction: column;
font-family: sans-serif;
font-size: 18px;
padding: 12px 32px;
margin: 1rem;
cursor: pointer;
border-radius: 4px;
transition: all 0.3s ease;
border-radius: 50px;
color: rgb(var(--text-color));
background-color: rgba(var(--primary-color), 0.50);
border: 1px solid rgba(var(--primary-color), 0.75);
color: rgba(var(--text-color), 0.8);
`;

const CardInfo = styled.div`

`;

export const CardDescription = ({ currentCard }) => {
  if (currentCard.default) {
    return <CardInfoContainer>Card Details</CardInfoContainer>;
  }
  if (currentCard.type !== 'Spell Card' && currentCard !== 'Trap Card') {
    return (
      <CardInfoContainer>
        Card Details
        <CardInfo>
          Name:
          {' '}
          {currentCard.name}
        </CardInfo>
        <CardInfo>
          Type:
          {' '}
          {currentCard.type}
        </CardInfo>
        <CardInfo>
          Description:
          {' '}
          {currentCard.desc}
        </CardInfo>
        <CardInfo>
          Attack:
          {' '}
          {currentCard.atk}
        </CardInfo>
        <CardInfo>
          Defense:
          {' '}
          {currentCard.def}
        </CardInfo>
      </CardInfoContainer>
    );
  }
  return (
    <CardInfoContainer>
      Card Details
      <CardInfo>
        Name:
        {' '}
        {currentCard.name}
      </CardInfo>
      <CardInfo>
        Type:
        {' '}
        {currentCard.type}
      </CardInfo>
      <CardInfo>
        Description:
        {' '}
        {currentCard.desc}
      </CardInfo>
    </CardInfoContainer>
  );
};
