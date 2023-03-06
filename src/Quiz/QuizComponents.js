import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const QuizBoard = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 500px;
  /* height: 800px; */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`;

const QuizTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const QuizDescription = styled.div`
  margin-bottom: 30px;
`;

const NextBtn = styled.button`
  background-color: grey;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: normal;

  ${(props) =>
    props.isPass &&
    `
    background-color: green;
    disabled: false;
    cursor: pointer;

    &:hover {
    background-color: #4b8b3b;
    }
    `
  };
`;

const AnswerContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const AnswerBtn = styled.button`
  background-color: #a9cbd7;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  ${(props) =>
    props.clicked &&
    `
      background-color: #89abc7;
      box-shadow: none;
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid white;
    `
  };
`;

const ProblemBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 80px;
  min-width: 450px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const ProblemDescription = styled.div`
  text-align: center;
`;

const ProblemImg = styled.img`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AnswerText = styled.input`
  width: 100%;
  type = "text";
`

const Hint = styled.div`
  color: blue;
  margin-bottom: 10px;
`;

export { ProblemDescription, AnswerBtn, ProblemBox, ProblemImg, AnswerText, Hint, QuizContainer, QuizBoard, QuizTitle, QuizDescription, NextBtn, AnswerContainer }
