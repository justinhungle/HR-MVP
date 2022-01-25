/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const CardImage = styled.img`
  margin: 1em;
`;

export const Card = ({ flipCards, image, index }) => {
  const [inTransition, setInTransition] = useState(false);
  const [flipCard, setFlipCard] = useState(false);
  return (
    <CSSTransition in={inTransition} timeout={300} className="card-transition">
      <CardImage
        onClick={() => {
          setFlipCard(true);
          setInTransition(true);
        }}
        src={flipCard || flipCards ? image : '/img/Yugioh-Back.png'}
        alt={`card-${index}`}
      />
    </CSSTransition>
  );
};

function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button onClick={() => setShowMessage(false)}>
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
