/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase';

const RegisterFormContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`;
const RegisterForm = styled.form`
  display:flex;
  width: 32rem;
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

const RegisterLabel = styled.label`
  display:flex;
  width: 14rem;
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

const RegisterInput = styled.input`
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
  color: black;
  background-color: white;
  border: 1px solid rgba(var(--primary-color), 0.75);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  &:hover {
    box-shadow: rgba(var(--primary-color), 0.5) 0px 0px 20px 0px;
    transition: all 0.3s ease;
    background-color: rgba(var(--primary-color), 0.75);
    border: 1px solid rgba(var(--primary-color), 0.1);
    color: rgba(var(--text-color), 0.9);
  }
  width: 16rem;
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
  letter-spacing: 0.06em;
`;

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    const navigateHome = () => navigate('/home');
    if (error) return <img src="https://i.kym-cdn.com/entries/icons/facebook/000/017/143/YaOfwyS.jpg" alt="Error" />;
    if (loading) return <img src="https://cdn.dribbble.com/users/295241/screenshots/4496315/media/ace3091f552eab286fbed6b458812f89.gif" alt="Loading" />;
    if (user) navigateHome();
  }, [user, loading, navigate]);
  return (
    <RegisterFormContainer>
      <RegisterForm>
        <RegisterLabel>Register</RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <RegisterInput
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <RegisterInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonContainer>
          <Button
            onClick={() => register()}
          >
            Register
          </Button>
          <Button
            onClick={() => signInWithGoogle()}
          >
            Google
          </Button>
        </ButtonContainer>
      </RegisterForm>
    </RegisterFormContainer>
  );
};
