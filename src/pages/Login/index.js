import React from 'react';

import {
  Container,
  Content,
  Form,
  FormContent,
  FormHeader,
  Input,
  AccessForm,
  LoginContent,
  Button,
} from './styles';
import HomeLogo from '../../assets/home-logo.png';
import SocialMedia from '../../components/SocialMedia';

export default function Login() {
  return (
    <Container>
      <LoginContent>
        <AccessForm />
        <SocialMedia />
      </LoginContent>
      <Content>
        <Form>
          <FormHeader>
            <img src={HomeLogo} alt="logo" />
            <span>Real Estate Solution</span>
            <h1>Login</h1>
          </FormHeader>
          <FormContent>
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" type="password" />
          </FormContent>
          <Button type="submit">Access Panel</Button>
        </Form>
      </Content>
    </Container>
  );
}
