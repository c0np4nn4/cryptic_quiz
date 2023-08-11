import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Landing from "./Landing";
import Ticket1 from "./Ticket/Ticket_6634b9567052a4ee734f0a035a848012";

const Wrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/ticket_6634b9567052a4ee734f0a035a848012" element={<Ticket1 />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
