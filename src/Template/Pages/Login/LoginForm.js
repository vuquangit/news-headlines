import React, { useCallback, useState } from "react";
import { Form, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { omit, find } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import { Input, Password } from "Components/Input";
import { updateProfile } from "Redux/Profile/profile.action";
import { sha512 } from "utils/sha512";

const LoginForm = () => {
  const salt = process.env.REACT_APP_SALT || "";
  const dispatch = useDispatch();
  const serializedState = localStorage.getItem("users");
  const users = serializedState ? JSON.parse(serializedState) : [];
  const [errorLogin, setErrorLogin] = useState("");

  const validatePassword = useCallback(
    (userpassword, hashedPassFromDB) => {
      var passwordData = sha512(userpassword, salt);
      if (passwordData === hashedPassFromDB) {
        return true;
      }
      return false;
    },
    [salt]
  );

  const onFinish = useCallback(
    async (values) => {
      console.log("Success:", values);
      const userFound = find(
        users,
        (item) => item.username === values.username
      );

      setErrorLogin("");
      if (!userFound) setErrorLogin("Username does not exist in the data");
      else if (validatePassword(values.password, userFound.password)) {
        await dispatch(updateProfile(omit(userFound, ["password"])));
      } else {
        setErrorLogin("Incorrect password!");
      }
    },
    [dispatch, users, validatePassword]
  );

  const onFinishFailed = useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  const handleChaneInput = useCallback(() => {
    errorLogin && setErrorLogin("");
  }, [errorLogin]);

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="login-form"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          placeholder="Username"
          allowClear
          prefix={<FontAwesomeIcon icon={faUser} />}
          onChange={handleChaneInput}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Password
          placeholder="Password"
          allowClear
          prefix={<FontAwesomeIcon icon={faLock} />}
          onChange={handleChaneInput}
        />
      </Form.Item>
      <Typography.Text type="danger">{errorLogin}</Typography.Text>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
