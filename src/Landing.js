import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import md5 from 'blueimp-md5';

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

const SecretInput = styled.input`
  width: 18rem;
  text-align: center;
`;

const Description = styled.div`
  margin-bottom: 30px;
`;

function LandingPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("hash: ", md5(inputValue))

    if (md5(inputValue) === "6634b9567052a4ee734f0a035a848012") {
      window.location.href = '/ticket_6634b9567052a4ee734f0a035a848012';  // or using history.push('/ticket')
    }
  };

  return (
    <ContainerLanding>
      <Logo src={logo} alt="logo" />
      <Heading>🎫 Ticket Service</Heading>
      <Subheading>Hello</Subheading>
      <Description>
        Test
      </Description>
      <SecretInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="QR 코드를 찍어서 나오는 값을 입력하세요!"
      />
      <StartBtn onClick={handleSubmit}>
        Ticket1
      </StartBtn>
    </ContainerLanding>
  );
}

export default LandingPage;

