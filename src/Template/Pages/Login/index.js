import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { isEmpty, get, isEqual } from "lodash";
import { Link } from "react-router-dom";

import BasicTemplate from "Template/BasicTemplate";
import LoginForm from "./LoginForm";
import "./login.scss";
// import { updateProfile } from "Redux/Profile/profile.action";

const Login = ({ history = {} }) => {
  const { data: profileData = {} } = useSelector(
    (state = {}) => get(state, "profile", {}),
    isEqual()
  );

  // // fake profile
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isEmpty(profileData)) {
  //     (async () =>
  //       await dispatch(
  //         updateProfile({
  //           email: "vuquangit@gmail.com",
  //           username: "vuquangit",
  //           fullName: "Quang Vũ Văn",
  //         })
  //       ))();
  //   }
  // }, [dispatch, profileData]);

  useEffect(() => {
    if (!isEmpty(profileData)) {
      history.push("/profile");
    }
  }, [history, profileData]);

  return (
    <BasicTemplate>
      <div className="login">
        <div className="login__content">
          <h1 className="login__content--title">Login</h1>
          <LoginForm />
          <div className="login__content--redirect">
            <p>Don't have an account?</p>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </BasicTemplate>
  );
};

export default withRouter(Login);
