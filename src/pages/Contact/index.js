import React from 'react';

import {
  Container,
  Content,
  Form,
  FormContent,
  FormHeader,
  Input,
  AccessForm,
  InputGroup,
  LoginContent,
  Button,
} from './styles';
import HomeLogo from '../../assets/home-logo.png';
import SocialMedia from '../../components/SocialMedia';

export default function Contact() {
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
            <h1>Contact</h1>
          </FormHeader>
          <FormContent>
            <InputGroup>
              <Input name="name" placeholder="Name" />
              <Input name="email" placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <Input name="phone" placeholder="Phone" />
              <Input name="subject" placeholder="Subject" />
            </InputGroup>
            <Input name="message" placeholder="Message" multiline />
          </FormContent>
          <Button type="submit">Send Message</Button>
        </Form>
      </Content>
    </Container>
  );
}
