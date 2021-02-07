import React from 'react';
import {Button, Form, Input, notification} from 'antd';
import AuthService from '../../services/AuthService';
import {FormWrapper, SignUpWrapper} from './styles';
const {signUp} = AuthService;

const validations = {
  firstName: [
    {
      required: true,
      message: 'Please input your first name!',
      max: 100,
      whitespace: true
    }
  ],
  lastName: [
    {
      required: true,
      message: 'Please input your last name!',
      max: 100,
      whitespace: true
    }
  ],
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

function SignUp() {
  const onFinish = async values => {
    console.log('Success:', values);
    try {
      await signUp(values);
    } catch ({message}) {
      notification.error(message);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    notification.error(errorInfo);
  };
  return (
    <SignUpWrapper>
      <FormWrapper name="basic" initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <h1>Sign up</h1>
        <Form.Item label="First name" name="firstName" rules={validations.firstName}>
          <Input />
        </Form.Item>
        <Form.Item label="Last name" name="lastName" rules={validations.lastName}>
          <Input />
        </Form.Item>

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
    </SignUpWrapper>
  );
}

export default SignUp;
