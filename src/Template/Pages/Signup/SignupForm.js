import React, { useCallback, useEffect, useState } from "react";
import { Form, Button } from "antd";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { find, omit } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faUserSecret,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { Input, Password } from "Components/Input";
import { updateProfile } from "Redux/Profile/profile.action";
import { sha512 } from "utils/sha512";

const SignupForm = () => {
  const salt = process.env.REACT_APP_SALT || "";
  const dispatch = useDispatch();
  const [users, setUsers] = useState(() => {
    const serializedState = localStorage.getItem("users");
    return serializedState ? JSON.parse(serializedState) : [];
  });

  const onFinish = useCallback(
    async (values) => {
      // console.log("Success:", values);
      const user = {
        ...values,
        password: await sha512(values.password, salt),
      };
      setUsers((preState) => [...preState, omit(user, ["confirm"])]);
      await dispatch(updateProfile(omit(user, ["password", "confirm"])));
    },
    [dispatch, salt]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Form
      name="singup-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="signup-form"
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
          () => ({
            validator(value) {
              if (!value || !find(users, (item) => item.username === value)) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Username already exists, please enter another!"
              );
            },
          }),
        ]}
      >
        <Input
          placeholder="Username"
          allowClear
          prefix={<FontAwesomeIcon icon={faUser} />}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
          () => ({
            validator(value) {
              if (!value || !find(users, (item) => item.email === value)) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Email already exists, please enter another!!"
              );
            },
          }),
        ]}
      >
        <Input
          placeholder="Email"
          allowClear
          prefix={<FontAwesomeIcon icon={faEnvelope} />}
        />
      </Form.Item>
      <Form.Item name="fullName">
        <Input
          placeholder="Full Name"
          allowClear
          prefix={<FontAwesomeIcon icon={faUserSecret} />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Password
          placeholder="Password"
          allowClear
          prefix={<FontAwesomeIcon icon={faLock} />}
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Password
          placeholder="Confirm password"
          allowClear
          prefix={<FontAwesomeIcon icon={faLock} />}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(SignupForm);
