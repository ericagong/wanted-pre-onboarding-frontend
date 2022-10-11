import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../shared/Layout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthFrame = () => {
  const [onSignIn, setOnSignIn] = useState(true);

  const navigate = useNavigate();

  // Assignment 3: 로그인 여부에 따른 리다이렉트 처리
  const checkToken = () => {
    if (!localStorage.getItem("AcessToken")) {
      return;
    }
    // 토큰 존재하는 경우 /todo로 리다이렉트
    navigate("/todo");
  };

  useEffect(() => {
    checkToken();
  }, []);

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
