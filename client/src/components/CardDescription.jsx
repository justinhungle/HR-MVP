/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

const CardInfoContainer = styled.div`
  display:flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: sans-serif;
  font-size: 18px;
  padding: 2rem 4rem;
  width: 32rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  border-radius: 50px;
  color: rgb(var(--text-color));
  background-color: rgba(var(--primary-color), 0.50);
  border: 1px solid rgba(var(--primary-color), 0.75);
  color: rgba(var(--text-color), 0.8);
  gap: .5rem 0rem;
`;

const CardInfo = styled.div`
  flex-direction: row;
  flex-wrap: wrap;

`;

export const CardDescription = ({ currentCard }) => {
  if (currentCard.default) {
    return (
      <CardInfoContainer>
        <h4>Card Details</h4>
      </CardInfoContainer>
    );
  }
  if (currentCard.type !== 'Spell Card' && currentCard !== 'Trap Card') {
    return (
      <CardInfoContainer>
        <h4>Card Details</h4>
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
      <h4>Card Details</h4>
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
