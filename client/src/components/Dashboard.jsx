/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  doc,
  setDoc,
} from 'firebase/firestore';
import 'regenerator-runtime/runtime';
import { Card } from './Card.jsx';
import { CardDescription } from './CardDescription.jsx';
import { getPack } from '../../shared/api';
import { auth, db } from '../firebase';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  color: white;
  justify-content: center;
  gap: 1rem;
`;
const PackAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Pack = styled.div`
  gap: .5em 5.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-style: solid;
  border-color: rgba(var(--primary-color), 0.15);
  border-thickness: 0.5rem;
  height: 46rem;
  align-content: flex-start;
  border-radius: 1rem;
`;
const ButtonContainer = styled.div`
  display:flex;
  width: 64rem;
  flex-direction: row;
  font-family: sans-serif;
  font-size: 18px;
  padding: 1rem 3rem;
  margin: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  border-radius: 50px;
  color: rgb(var(--text-color));
  background-color: rgba(var(--primary-color), 0.35);
  border: 1px solid rgba(var(--primary-color), 0.55);
  color: rgba(var(--text-color), 0.8);
`;

const Button = styled.button`
  &:hover {
    box-shadow: rgba(var(--primary-color), 0.5) 0px 0px 20px 0px;
    transition: all 0.3s ease;
    background-color: rgba(var(--primary-color), 0.45);
    border: 1px solid rgba(var(--primary-color), 0.8);
    color: rgba(var(--text-color), 0.9);
  }
  font-family: sans-serif;
  font-size: 18px;
  padding: 12px 24px;
  margin: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  border-radius: 50px;
  color: rgb(var(--text-color));
  background-color: rgba(var(--primary-color), 0.30);
  border: 1px solid rgba(var(--primary-color), 0.55);
  color: rgba(var(--text-color), 0.8);
  letter-spacing: 0.06em;
`;
const Secret = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Dashboard = ({ pack, setPack }) => {
  const [user, loading, error] = useAuthState(auth);
  const [flipCards, setFlipCards] = useState(false);
  const [currentCard, setCurrentCard] = useState({ default: true });
  const [secret, setSecret] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const navigateLogin = () => navigate('/login');
    if (error) return <img src="https://i.kym-cdn.com/entries/icons/facebook/000/017/143/YaOfwyS.jpg" alt="Error" />;
    if (loading) return <img className="loading-image" src="./img/Loading.jpeg" alt="Loading" />;
    if (!user) return navigateLogin();
  }, [user, loading, navigate]);
  if (!user) return <img src="https://i.kym-cdn.com/entries/icons/facebook/000/017/143/YaOfwyS.jpg" alt="Error" />;
  const addCardsToCollection = async (cards) => {
    await setDoc(doc(db, 'userCardCollections', user.uid), {
      uid: user.uid,
      email: user.email,
      cardCollection: cards,
    }, { merge: true });
  };
  if (secret) {
    return (
      <Secret>
        <img alt="superLasagna" src="./img/SuperLasagna.jpeg" />
      </Secret>
    );
  }

  return (
    <AppContainer>
      <ButtonContainer>
        <Button onClick={() => {
          getPack()
            .then((results) => {
              setFlipCards(false);
              setPack(results.data);
              setCurrentCard({ default: true });
            })
            .catch((err) => {
              throw err;
            });
        }}
        >
          Get New Pack
        </Button>
        <Button onClick={() => setFlipCards(true)}>Open Pack</Button>
        <Button onClick={() => addCardsToCollection(pack)}>Add Cards to Collection</Button>
        <Button onClick={() => setSecret(true)}>SFO138-139 Secret Card</Button>
      </ButtonContainer>
      <PackAndDescriptionContainer>
        <CardDescription currentCard={currentCard} />
        <Pack>
          {pack.map((card, index) => (
            <Card
              index={index}
              image={card.card_images[0].image_url_small}
              key={card.card_images[0].id}
              flipCards={flipCards}
              card={card}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </Pack>
      </PackAndDescriptionContainer>
    </AppContainer>
  );
};
