import { useState } from "react";

import Layout from "../shared/Layout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthFrame = () => {
  const [onSignIn, setOnSignIn] = useState(true);

  // signin, signup 탭 간 전환 함수
  const toggleTab = (e) => {
    setOnSignIn((prev) => !prev);
  };

  return (
    <Layout>
      {onSignIn ? (
        <SignIn onClick={toggleTab} />
      ) : (
        <SignUp onClick={toggleTab} />
      )}
    </Layout>
  );
};

export default AuthFrame;
