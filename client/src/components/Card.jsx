/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Button, Container } from 'react-bootstrap';

const CardImage = styled.img`
  margin: 0.5em;
  &:hover {
    transform: translateY(-5%);
  }
`;

export const Card = ({ image, index, flipCards }) => {
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
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowCard(true)}
          size="lg"
          className="back-card-button"
        />
      )}
      <CSSTransition
        in={showCard}
        timeout={400}
        classNames="card-transition"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => {
          setShowButton(true);
          setShowCard(false);
        }}
      >
        <CardImage src={image} alt={`card-${index}`} />
      </CSSTransition>
    </Container>
  );
};
