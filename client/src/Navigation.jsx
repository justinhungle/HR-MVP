/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { logout } from './firebase';
import * as ROUTES from './routes';

const NavigationContainer = styled.div`
  display:flex;
  flex-direction: row;
  font-family: sans-serif;
  font-size: 18px;
  padding: 12px 32px;
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
  padding: 12px 32px;
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

export const Navigation = () => (
  <NavigationContainer>
    <Link to={ROUTES.REGISTER}><Button>Register</Button></Link>
    <Link to={ROUTES.LOGIN}><Button>Login</Button></Link>
    <Link to={ROUTES.HOME}><Button>Home</Button></Link>
    <Link to={ROUTES.MY_COLLECTION}><Button>My Collection</Button></Link>
    <Link to={ROUTES.LOGOUT}><Button onClick={() => logout()}>Log out</Button></Link>
  </NavigationContainer>
);
