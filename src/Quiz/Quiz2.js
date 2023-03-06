import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AnswerContainer, NextBtn, QuizContainer,
  QuizBoard, QuizTitle, QuizDescription, AnswerBtn
} from './QuizComponents.js';



function Quiz() {
  let [isPass, setIsPass] = useState(false);
  let [clickedBtn, setClickedBtn] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
  }, [clickedBtn]);

  return (
    <QuizContainer>
      <QuizBoard>
        <QuizTitle>문제 2번 - AES</QuizTitle>
        <QuizDescription>
          <strong><mark>AES</mark></strong> 암호 알고리즘은 현재까지 <u>안전한 알고리즘</u>으로 알려져 있습니다. <br />
          많은 컴퓨터 시스템이 이 AES 를 이용해 정보보호를 실현하고 있습니다. <br />

          <br />

          그런데 사실 AES 이전에 DES 라는 암호 알고리즘이 있었습니다. <br />
          '<strong>Data Encryption Standard</strong>'의 약자로, 이름 그대로 암호화의 표준이었죠. <br />
          그렇다면, 왜 DES 대신 새로운 암호 알고리즘이 등장하게 되었을까요? <br />

          <br />

          그 이유는 90년대 후반, 컴퓨터 성능이 좋아지면서 <br />
          DES 에 대한 공격이 가능해졌고, 안전성에 관한 논란이 있었기 때문입니다.<br />

          <br />

          이에 미국의 NIST 에서는 1997년, 새로운 암호 표준 공모전을 열었고 <br />
          벨기에의 <strong>Rijndael</strong> 알고리즘을 채택하게 됩니다. <br />

          <br />

          그렇게 해서 2001년부터 암호화 표준은 <strong><mark>AES</mark></strong>가 되었고, <br />
          암호화가 필요한 다양한 분야에서 활용되고 있습니다. <br />

          <br />

          그렇다면, 이 <strong><mark>AES</mark></strong> 은 무엇을 줄인 말일까요?
        </QuizDescription>
        <AnswerContainer>
          <AnswerBtn onClick={() => { setIsPass(false); setClickedBtn(1) }} clicked={clickedBtn === 1}>Amazing Encoding Solution</AnswerBtn>
          <AnswerBtn onClick={() => { setIsPass(false); setClickedBtn(2) }} clicked={clickedBtn === 2}>Automated Engineering Security</AnswerBtn>
          <AnswerBtn onClick={() => { setIsPass(true); setClickedBtn(3) }} clicked={clickedBtn === 3}>Advanced Encryption Standard</AnswerBtn>
        </AnswerContainer>

        <NextBtn isPass={isPass} onClick={() => {
          if (isPass) {
            navigate('/Quiz3');
          }
        }} >
          NEXT
        </NextBtn>
      </QuizBoard>
    </QuizContainer >
  );
}

export default Quiz;
