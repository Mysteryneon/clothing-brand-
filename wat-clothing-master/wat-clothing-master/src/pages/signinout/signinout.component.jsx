import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./signinout.styles.scss";

const SignInOut = () => (
  <div className="signinup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInOut;
