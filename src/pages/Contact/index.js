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
  Button,
} from './styles';
import HomeLogo from '../../assets/home-logo.png';

export default function Contact() {
  return (
    <Container>
      <AccessForm />
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
