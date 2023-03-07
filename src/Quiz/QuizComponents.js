import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media screen and (max-width: 450px) {

  }
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

  @media screen and (max-width: 450px) {
    width: 225px;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

const QuizTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const QuizDescription = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: 450px) {
    width: 100%;
    font-size: 0.6rem;
    margin-bottom: 10px;
  }
`;

const NextBtn = styled.button`
  background-color: grey;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: normal;

  width: 150px;

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

const HintBtn = styled.button`
  background-color: #003008;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: normal;

  width: 150px;

  ${(props) =>
    props.isPass &&
    `
    background-color: #001c05;
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
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 450px) {
    width: 80%;
    font-size: 0.6rem;
    margin-bottom: 10px;
  }
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

  @media screen and (max-width: 450px) {
    width: 100%;
    font-size: 0.6rem;
    margin-bottom: 10px;

    padding: 5px 10px;
  }
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

  @media screen and (max-width: 450px) {
    min-width: 100%;
    font-size: 0.6rem;
    margin-bottom: 10px;
  }
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

export { HintBtn, ProblemDescription, AnswerBtn, ProblemBox, ProblemImg, AnswerText, Hint, QuizContainer, QuizBoard, QuizTitle, QuizDescription, NextBtn, AnswerContainer }
