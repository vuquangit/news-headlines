import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { isEmpty, get, isEqual } from "lodash";
import { Link } from "react-router-dom";

import BasicTemplate from "Template/BasicTemplate";
import SignupForm from "./SignupForm";
import "./signup.scss";

const Signup = ({ history = {} }) => {
  const { data: profileData = {} } = useSelector(
    (state = {}) => get(state, "profile", {}),
    isEqual()
  );

  useEffect(() => {
    if (!isEmpty(profileData)) {
      history.push("/profile");
    }
  }, [history, profileData]);

  return (
    <BasicTemplate>
      <div className="signup">
        <div className="signup__content">
          <h1 className="signup__content--title">Signup</h1>
          <SignupForm />
          <div className="signup__content--redirect">
            <p>Have a account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </BasicTemplate>
  );
};

export default withRouter(Signup);
