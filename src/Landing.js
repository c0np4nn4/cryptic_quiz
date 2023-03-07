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
      <Heading>🎉 Cryptic 🎉</Heading>
      <Subheading>PNU Cryptography Club</Subheading>
      <Description>
        안녕하세요. <br />
        부산대학교 암호동아리 Cryptic 입니다 :) <br />
        <br />
        2023년 동아리원 모집을 위한 지원서 작성 전에, <br />
        지원자 분들을 위해 간단한 암호 문제를 준비해 보았습니다. <br />
        <br />
        문제는 고전 암호, AES, ECC 의 총 세 문제로 구성되어 있습니다. <br />
        <br />
        준비 되셨다면, 아래 버튼을 클릭하시고 진행해주시기 바랍니다!<br />
        <br />
        Good Luck! <br />
        <br />
        (본 페이지는 PC 화면에 최적화되어 있습니다.)
      </Description>
      <StartBtn onClick={() => { navigate('/Quiz1') }}>
        시작
      </StartBtn>
    </ContainerLanding>
  );
}

export default LandingPage;

