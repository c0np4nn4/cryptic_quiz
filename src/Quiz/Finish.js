import {
  QuizContainer, QuizBoard, QuizTitle, QuizDescription
} from './QuizComponents.js';

import { Fireworks } from '@fireworks-js/react';



function Quiz() {


  return (
    <QuizContainer>
      <Fireworks style={{ zIndex: "2", position: "absolute", height: "800px" }} />
      <QuizBoard style={{ zIndex: "3" }}>
        <QuizTitle>완료!</QuizTitle>
        <QuizDescription>
          축하합니다! 모든 문제를 해결하셨습니다. 😆<br />
          아래 링크를 클릭하셔서 지원 설문 폼을 작성해주시기 바랍니다. <br />
          <br />

          <a href="https://forms.gle/Xv4Daw7zGgm9eV2X7">Link</a>

          <br />
          수고 많으셨습니다! 👍
        </QuizDescription>
      </QuizBoard>
    </QuizContainer >
  );
}

export default Quiz;
