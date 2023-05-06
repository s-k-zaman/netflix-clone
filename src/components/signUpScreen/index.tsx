import React, { useRef } from "react";
import "./signUpScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

function SignUpScreen() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const register = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef?.current!.value,
      passwordRef?.current!.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const signIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef?.current!.value,
      passwordRef?.current!.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
