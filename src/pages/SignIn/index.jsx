import React from 'react';
import {Form, Button, Input, notification} from 'antd';
import AuthService from '../../services/AuthService';
import {SignInWrapper, FormWrapper} from './styles';
const {signIn} = AuthService;

const validations = {
  email: [
    {
      required: true,
      message: 'Please input your email!',
      type: 'email',
      max: 100
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password!',
      max: 100
    }
  ]
};

function SignIn() {
  const onFinish = async values => {
    try {
      await signIn(values);
    } catch ({message}) {
      notification.error(message);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    notification.error(errorInfo);
  };

  return (
    <SignInWrapper>
      <FormWrapper name="basic" initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <h1>Sign in</h1>
        <Form.Item label="Email" name="email" rules={validations.email}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={validations.password}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </FormWrapper>
    </SignInWrapper>
  );
}

export default SignIn;
