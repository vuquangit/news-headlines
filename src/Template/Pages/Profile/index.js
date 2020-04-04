import React from "react";
import BasicTemplate from "Template/BasicTemplate";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { get, isEqual } from "lodash";

import { clearProfile } from "Redux/Profile/profile.action";
import "./profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const { email = "", username = "", fullName = "" } = useSelector(
    (state = {}) => get(state, "profile.data", {}),
    isEqual()
  );

  const handleLogout = async () => {
    await dispatch(clearProfile());
  };

  return (
    <BasicTemplate>
      <div className="profile">
        <div className="profile__content">
          <div className="profile__content--info">
            <p>
              <span>Username:</span> {username}
            </p>
            <p>
              <span>Email:</span> {email}
            </p>
            <p>
              <span>Full name:</span> {fullName}
            </p>
          </div>
          <div className="profile__content--actions">
            <Button onClick={handleLogout} className="profile__action--logout">
              Log out
            </Button>
          </div>
        </div>
      </div>
    </BasicTemplate>
  );
};

export default Profile;
