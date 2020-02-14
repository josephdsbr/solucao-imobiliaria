import React, { useState } from 'react';

import {
  Container,
  HeaderContent,
  Button,
  BodyContent,
  Logo,
  Description,
  Form,
  Input,
  SubmitButton,
  MobileInfo,
} from './styles';
import HomeLogo from '../../assets/home-logo.png';
import MobileLogo from '../../assets/mobile.png';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <HeaderContent>
        <Button>Log in</Button>
      </HeaderContent>
      <BodyContent>
        <Logo>
          <img src={HomeLogo} alt="real-estate-solution" clasName="img-fluid" />
          <span>Real Estate Solution</span>
        </Logo>
        <Description>
          <span>Discover the best app to find the fome of your dreams</span>
        </Description>
        <Form>
          <header>
            <img src={HomeLogo} alt="real-state-solution" className="img-fluid"/>
            <span>Real Estate Solution</span>
          </header>
          <Input
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <SubmitButton>Sign in</SubmitButton>
        </Form>
        <MobileInfo>
          <img
            src={MobileLogo}
            alt="real-estate-solution-mobile"
            className="img-fluid"
          />
        </MobileInfo>
      </BodyContent>
    </Container>
  );
}
