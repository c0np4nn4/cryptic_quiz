import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

const ContainerLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;

  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 200px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-top: 24px;
  text-align: center;
`;

const Subheading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-top: 16px;
  text-align: center;
`;

const StartBtn = styled.button`
  font-size: 24px;
  font-weight: 400;
  margin-top: 16px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.div`
  margin-bottom: 30px;
`;

function LandingPage() {
  const navigate = useNavigate();

  return (
    <ContainerLanding>
      <Logo src={logo} alt="logo" />
      <Heading>π Cryptic π</Heading>
      <Subheading>PNU Cryptography Club</Subheading>
      <Description>
        μλνμΈμ. <br />
        λΆμ°λνκ΅ μνΈλμλ¦¬ Cryptic μλλ€ :) <br />
        <br />
        2023λ λμλ¦¬μ λͺ¨μ§μ μν μ§μμ μμ± μ μ, <br />
        μ§μμ λΆλ€μ μν΄ κ°λ¨ν μνΈ λ¬Έμ λ₯Ό μ€λΉν΄ λ³΄μμ΅λλ€. <br />
        <br />
        λ¬Έμ λ κ³ μ  μνΈ, AES, ECC μ μ΄ μΈ λ¬Έμ λ‘ κ΅¬μ±λμ΄ μμ΅λλ€. <br />
        <br />
        μ€λΉ λμ¨λ€λ©΄, μλ λ²νΌμ ν΄λ¦­νμκ³  μ§νν΄μ£ΌμκΈ° λ°λλλ€!<br />
        <br />
        Good Luck! <br />
        <br />
        (λ³Έ νμ΄μ§λ PC νλ©΄μ μ΅μ νλμ΄ μμ΅λλ€.)
      </Description>
      <StartBtn onClick={() => { navigate('/Quiz1') }}>
        μμ
      </StartBtn>
    </ContainerLanding>
  );
}

export default LandingPage;

