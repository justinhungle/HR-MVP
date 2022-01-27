/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Button, Container } from 'react-bootstrap';

const CardImage = styled.img`
  &:hover {
    transform: translateY(-5%);
  }
  margin: 0.5em;
  border-radius: 3px;
`;

export const Card = ({
  image,
  index,
  flipCards,
  card,
  setCurrentCard,
}) => {
  const [showButton, setShowButton] = useState(true);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (flipCards) {
      setShowCard(true);
    }
    if (!flipCards) {
      setShowCard(false);
    }
  }, [flipCards]);

  return (
    <Container
      className="card-container"
    >
      {showButton && (
        <Button
          onClick={() => {
            setCurrentCard(card);
            setShowCard(true);
          }}
          size="lg"
          className="back-card-button"
        />
      )}
      <CSSTransition
        in={showCard}
        timeout={150}
        classNames="card-transition"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => {
          setShowButton(true);
          setShowCard(false);
        }}
      >
        <CardImage
          onMouseOver={() => setCurrentCard(card)}
          src={image}
          alt={`card-${index}`}
          onClick={() => setCurrentCard(card)}
        />
      </CSSTransition>
    </Container>
  );
};
