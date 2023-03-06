import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnswerContainer, AnswerText, Hint, NextBtn, ProblemBox, ProblemDescription, QuizBoard, QuizContainer, QuizDescription, QuizTitle } from './QuizComponents';

const Alice = () => {
  return <mark style={{ backgroundColor: "tomato" }}><strong>Alice</strong></mark>;
}

const Bob = () => {
  return <mark style={{ backgroundColor: "lime" }}><strong>Bob</strong></mark>;
}

const DH = () => {
  return <strong><mark>Dffie-Hellman</mark></strong>;
}


function Quiz() {
  let [isPass, setIsPass] = useState(false);
  let [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (answer === "Cryptography") {
      setIsPass(true);
    }

  }, [answer]);

  return (
    <QuizContainer>
      <QuizBoard>
        <QuizTitle>문제 3번 - DH</QuizTitle>
        <QuizDescription>
          {DH()} Key Exchange 는 <br />
          네트워크 상에서 안전하게 <u>키를 교환하는 방법</u>입니다.<br />

          <br />

          아래에서 {DH()} 의 개념을 간단히 살펴보겠습니다. <br />

          <br />

          <details>
            <summary>DH</summary>
            <ProblemBox>
              <ProblemDescription>
                <br />
                {Alice()} 와 {Bob()} 이
                네트워크 상에서 키를 공유하고자 합니다.<br />

                <br />

                이 때, 임의의 값 <strong>G</strong>가 네트워크 상에 공개되어 있다고 <br />
                가정을 하겠습니다. <br />

                <br />

                <hr />

                (1) <br />
                {Alice()} 는 일단 자신의 비밀 값인 <strong>A</strong> 를 정합니다.<br />
                그런 다음, 임의의 값 <strong>G</strong> 에 대해 아래의 연산을 행합니다. <br />

                <br />

                <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                  <mi>E</mi>
                  <mo stretchy="false">(</mo>
                  <mi>A</mi>
                  <mo stretchy="false">)</mo>
                  <mo>=</mo>
                  <msup>
                    <mi>g</mi>
                    <mi>A</mi>
                  </msup>
                </math>

                <br />
                그리고 값 <strong>E(A)</strong> 를 {Bob()} 에게 전송합니다. <br />
                <hr />

                (2) <br />
                {Bob()} 도 자신의 비밀 값인 <strong>B</strong> 를 정합니다. <br />
                그리고 {Alice()} 와 마찬가지로 아래 연산을 행합니다.<br />
                <br />
                <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                  <mi>E</mi>
                  <mo stretchy="false">(</mo>
                  <mi>B</mi>
                  <mo stretchy="false">)</mo>
                  <mo>=</mo>
                  <msup>
                    <mi>g</mi>
                    <mi>B</mi>
                  </msup>
                </math>
                <br />
                그리고 값 <strong>E(B)</strong> 를 {Alice()} 에게 전송합니다. <br />
                <hr />

                (3) <br />
                {Alice()} 는 <strong>A</strong> 와 <strong>E(B)</strong>를 알고 있으므로, <br />
                아래 수식과 같이 <strong>K</strong> 를 만들 수 있습니다.

                <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                  <mi>K</mi>
                  <mo>=</mo>
                  <mi>E</mi>
                  <mo stretchy="false">(</mo>
                  <mi>B</mi>
                  <msup>
                    <mo stretchy="false">)</mo>
                    <mi>A</mi>
                  </msup>
                  <mo>=</mo>
                  <msup>
                    <mi>G</mi>
                    <mrow class="MJX-TeXAtom-ORD">
                      <mi>B</mi>
                      <mi>A</mi>
                    </mrow>
                  </msup>
                </math>

                <br />

                {Bob()} 역시 <strong>B</strong> 와 <strong>E(A)</strong>를 알고 있으므로, <br />
                아래 수식과 같이 <strong>K</strong> 를 만들 수 있습니다.

                <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                  <mi>K</mi>
                  <mo>=</mo>
                  <mi>E</mi>
                  <mo stretchy="false">(</mo>
                  <mi>A</mi>
                  <msup>
                    <mo stretchy="false">)</mo>
                    <mi>B</mi>
                  </msup>
                  <mo>=</mo>
                  <msup>
                    <mi>G</mi>
                    <mrow class="MJX-TeXAtom-ORD">
                      <mi>A</mi>
                      <mi>B</mi>
                    </mrow>
                  </msup>
                </math>

                <br />

                <hr />
                (4) <br />
                만약 <strong>해커</strong>가 중간에서 <br />
                값 <strong>E(A)</strong> 나 <strong>E(B)</strong>를 탈취하더라도 <br />
                <i>해커는 비밀 값 <strong>A</strong> 나 <strong>B</strong> 를 모르기 때문에</i>, <br />
                {Alice()} 와 {Bob()} 이 공유하는 키 <strong>K</strong> 를 구하기 매우 어렵습니다. <br />

                <hr />
                <br />


              </ProblemDescription>
            </ProblemBox>
          </details>

          <br />

          결국 {DH()} Key Exchange 는 공유 키 <strong>K</strong> 를 <br />
          안전하게 만드는 방법이라고 할 수 있습니다. <br />

          <br />
          <hr />
          <br />

          {DH()} Key Exchange 를 하는 중이라고 가정하겠습니다. <br />
          <br />
          자신의 비밀값 <strong>A</strong>와 수신된 값 <strong>E(B)</strong> 가 아래와 같을 때,<br />
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
            <mi>A</mi>
            <mo>=</mo>
            <mtext>3</mtext>
            <mo>,</mo>
            <mspace width="thickmathspace" />
            <mi>E</mi>
            <mo stretchy="false">(</mo>
            <mi>B</mi>
            <mo stretchy="false">)</mo>
            <mo>=</mo>
            <mtext>16807</mtext>
          </math>
          <br />
          공유 키 <strong>K</strong> 를 구하고, <br />
          XOR 연산으로 암호화된 아래 암호문을 해독해보세요. <br />
          <br />

          <Hint>
            Tool: <a target="_blank" rel="noreferrer" href="https://gchq.github.io/CyberChef/#recipe=XOR(%7B'option':'UTF8','string':''%7D,'Standard',false)&input=d0VNR0FZVkdRSVFN">
              CyberChef</a><br />
            Hint: "KEY" 에 올바른 공유 키(Decimal)를 넣으면 답을 얻을 수 있습니다.

          </Hint>

          <ProblemBox>
            <ProblemDescription>
              <strong>wEMGAYVGQIQM</strong>
            </ProblemDescription>
          </ProblemBox>

          <br />

          <AnswerContainer>
            <AnswerText placeholder="답을 입력하세요" onChange={(e) => {
              setAnswer(e.target.value);
            }} />
          </AnswerContainer>

          <NextBtn isPass={isPass} onClick={() => {
            if (isPass) {
              navigate('/Finish');
            }
          }} >
            NEXT
          </NextBtn>
        </QuizDescription>
      </QuizBoard>
    </QuizContainer >
  );
}

export default Quiz;
