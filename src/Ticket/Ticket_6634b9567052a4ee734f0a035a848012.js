import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function IceCold() {
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

  });

  return (
    <>
      <h1>Ticket Verified!</h1>
      <br />
      <br />
      <p>환영합니다!</p>
      <img style={{ border: "5px solid red" }} src="https://github.com/c0np4nn4/cryptic_quiz/assets/49471288/9ea0eeda-9fe4-4a62-ac22-06da19c517a6" />
    </>
  );
}

export default IceCold;
