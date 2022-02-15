/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  doc,
  getDoc,
} from 'firebase/firestore';
import 'regenerator-runtime/runtime';
import { CardDescription } from './CardDescription.jsx';
import { auth, db } from '../firebase';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  color: white;
  justify-content: center;
  gap: 1rem;
`;
const CardImage = styled.img`
  &:hover {
    transform: translateY(-5%);
  }
  margin: 0.5em;
  border-radius: 3px;
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
  width: 56rem;
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

const Selection = styled.select`
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

const Option = styled.option`
`;

export const MyCollection = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentCollection, setCurrentCollection] = useState([]);
  const [currentCard, setCurrentCard] = useState({ default: true });
  const navigate = useNavigate();
  let userRef;
  if (user) {
    userRef = doc(db, 'userCardCollections', user.uid);
  }
  useEffect(() => {
    const navigateRegister = () => navigate('/login');
    if (error) {
      return (
        <img src="https://i.kym-cdn.com/entries/icons/facebook/000/017/143/YaOfwyS.jpg" alt="Error" />
      );
    }
    if (loading) return <img className="loading-image" src="./img/Loading.jpeg" alt="Loading" />;
    if (!user) return navigateRegister();
    const getCards = async () => {
      const userCardCollection = await getDoc(userRef);
      setCurrentCollection(userCardCollection.data().cardCollection);
    };
    getCards();
  }, [user, loading, navigate]);
  if (!user) return <img src="https://i.kym-cdn.com/entries/icons/facebook/000/017/143/YaOfwyS.jpg" alt="Error" />;
  return (
    <AppContainer>
      <ButtonContainer>
        <Selection type="button">
          <Option>Filter By</Option>
        </Selection>
        <Selection type="button">
          <Option>Sort By</Option>
        </Selection>
      </ButtonContainer>
      <PackAndDescriptionContainer>
        <CardDescription currentCard={currentCard} />
        <Pack>
          {currentCollection.map((card, index) => (
            <CardImage
              onMouseOver={() => setCurrentCard(card)}
              src={card.card_images[0].image_url_small}
              alt={`card-${index}`}
              onClick={() => setCurrentCard(card)}
              key={card.card_images[0].id}
            />
          ))}
        </Pack>
      </PackAndDescriptionContainer>
    </AppContainer>
  );
};
