import { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthFrame = () => {
  const [onSignIn, setOnSignIn] = useState(true);

  // signin, signup 탭 간 전환 함수
  const toggleTab = (e) => {
    setOnSignIn((prev) => !prev);
  };

  return (
    <>
      {onSignIn ? (
        <SignIn onClick={toggleTab} />
      ) : (
        <SignUp onClick={toggleTab} />
      )}
    </>
  );
};

export default AuthFrame;
