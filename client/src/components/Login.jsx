/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import { REGISTER } from '../routes';

const LoginContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`;

const LoginForm = styled.form`
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

const LoginLabel = styled.label`
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

const LoginInput = styled.input`
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
  background-color: white;
  border: 1px solid rgba(var(--primary-color), 0.75);
  color: black;
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
const Container = styled.div`
  margin-left: 1.8rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) return <img src="https://i.kym-cdn.com/entries/icons/facebook/000/017/143/YaOfwyS.jpg" alt="Error" />;
    if (loading) return <img src="https://cdn.dribbble.com/users/295241/screenshots/4496315/media/ace3091f552eab286fbed6b458812f89.gif" alt="Loading" />;
    if (user) navigate('/home');
  }, [user, loading]);
  return (
    <LoginContainer>
      <LoginForm>
        <LoginLabel>Login</LoginLabel>
        <LoginInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonContainer>
          <Button
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </Button>
          <Button
            onClick={() => signInWithGoogle()}
          >
            Google Login
          </Button>
        </ButtonContainer>
        <Container>
          Don't have an account?
          <Link to={REGISTER}>Register</Link>
          now.
        </Container>
      </LoginForm>
    </LoginContainer>
  );
};
