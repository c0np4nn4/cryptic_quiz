import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import caesar_cipher from './caesar_cipher.png';

import {
  ProblemImg, ProblemBox, AnswerContainer,
  AnswerText, Hint, NextBtn,
  QuizContainer, QuizBoard, QuizTitle, QuizDescription, ProblemDescription, HintBtn
} from './QuizComponents.js';



function Quiz() {
  let [isPass, setIsPass] = useState(false);
  let [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const cipherText = () => {
    return <div>Chfna Angvbany Havirefvgl</div>;
  }

  const plainText = () => {
    return <div>Pusan National University</div>;
  }

  useEffect(() => {
    if (answer === "Pusan National University") {
      setIsPass(true);
    }

  }, [answer]);

  return (
    <QuizContainer>
      <QuizBoard>
        <QuizTitle>문제 1번 - Classic Cipher</QuizTitle>
        <QuizDescription>
          고전 암호는 쉽게 말하면 컴퓨터 이전의 암호입니다. <br />

          <br />

          즉, 암호화와 복호화(복원)를 '사람'이 해야 하기 때문에 <br />
          기법(알고리즘) 자체는 비교적 간단한 경우가 많습니다. <br />

          <br />

          이 문제는 고전암호 중 잘 알려진 Caesar Cipher 를 이용했습니다.<br />
          Caesar Cipher 는 아래 그림과 같이 문자를 치환하는 방식으로 동작합니다. <br />

          <ProblemImg src={caesar_cipher} alt="caesar_cipher" />

          위 그림은 알파벳을 오른쪽으로 2만큼 (왼쪽으로 24만큼) 밀어서 <br />
          원래 알파벳에 대응하는 문자로 치환하는 방식을 보여줍니다. <br />

          <br />

          첫 줄의 오른쪽에 있던 평문 "CAT"이  <br />
          암호화의 결과로 "AYR" 이 되는 것을 확인할 수 있습니다. <br />

          <br />

          아래의 암호문은 Caesar Cipher 로 암호화 되었습니다. <br />
          평문을 찾아서 입력해주세요! <br />

          <br />

          <Hint>
            Hint: <a target="_blank" rel="noreferrer" href="https://gchq.github.io/CyberChef/#recipe=ROT13(true,true,false,0)&input=Q2hmbmEgQW5ndmJhbnkgSGF2aXJlZnZnbA">
              Tool</a><br />
          </Hint>

          <ProblemBox>
            <ProblemDescription>
              {isPass ? plainText() : cipherText()}
            </ProblemDescription>
          </ProblemBox>


          <AnswerContainer>
            <AnswerText placeholder="답을 입력하세요" onChange={(e) => {
              setAnswer(e.target.value);
            }} />
          </AnswerContainer>

          <NextBtn isPass={isPass} onClick={() => {
            if (isPass) {
              navigate('/Quiz2');
            }
          }} >
            다음
          </NextBtn>

          <HintBtn onClick={() => {
            setIsPass(true);
          }} >
            정답 보기
          </HintBtn>
        </QuizDescription>
      </QuizBoard>

    </QuizContainer >
  );
}

export default Quiz;
