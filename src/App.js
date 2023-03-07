import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Landing from "./Landing";
import Quiz1 from "./Quiz/Quiz1";
import Quiz2 from "./Quiz/Quiz2";
import Quiz3 from "./Quiz/Quiz3";
import Finish from "./Quiz/Finish";

const Wrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/Quiz1" element={<Quiz1 />} />
          <Route path="/Quiz2" element={<Quiz2 />} />
          <Route path="/Quiz3" element={<Quiz3 />} />
          <Route path="/Finish" element={<Finish />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
