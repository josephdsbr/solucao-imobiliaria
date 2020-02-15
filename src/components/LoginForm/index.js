import React from 'react';

import { Form, FormHeader, FormContent, Input, Button } from './styles';
import HomeLogo from '../../assets/home-logo.png';

export default function LoginForm() {
  return (
    <Form>
      <FormHeader>
        <img src={HomeLogo} alt="home-logo" className="img-fluid" />
        <span>Real State Solution</span>
      </FormHeader>
      <FormContent>
        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Password" type="password" />
        <Button type="submit">Entrar</Button>
      </FormContent>
    </Form>
  );
}
