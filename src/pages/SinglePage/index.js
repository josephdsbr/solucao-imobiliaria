import React from 'react';

import {
  Container,
  MainSection,
  AboutSection,
  ContactSection,
  LoginSection,
} from './styles';

export default function SinglePage() {
  return (
    <Container>
      <MainSection />
      <AboutSection />
      <ContactSection />
      <LoginSection />
    </Container>
  );
}
