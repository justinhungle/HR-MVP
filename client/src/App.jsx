/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-spacing */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPack } from '../shared/api';
import { Card } from './components/Card.jsx';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  color: white;
  justify-content: center;

`;

const Pack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-style: solid;
  border-color: lightblue;
  border-thickness: 0.5rem;
  width: 8 rem;
  height: 16 rem;
  align-content: flex-start;
  border-radius: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  border-radius: 3px;
  height:  4rem;
  width: 8rem;
`;

const App = () => {
  const [pack, setPack] = useState([]);
  const [flipCards, setFlipCards] = useState(false);
  useEffect(() => {
    getPack()
      .then((results)=> {
        setPack(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AppContainer>
      <h1>Yu-Gi-Oh Pack Opener</h1>
      <ButtonContainer>
        <Button onClick={() => {
          getPack()
            .then((results) => {
              setFlipCards(false);
              setPack(results.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        >
          Get New Pack
        </Button>
        <Button onClick={() => setFlipCards(true)}>Open Pack</Button>
      </ButtonContainer>
      <Pack>
        {pack.map((card, index) => (
          <Card
            index={index}
            image={card.card_images[0].image_url_small}
            key={card.card_images[0].id}
            flipCards={flipCards}
          />
        ))}
      </Pack>
    </AppContainer>
  );
};

export default App;
