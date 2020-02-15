import React from 'react';

import Logo from '../../assets/home-logo.png';

import { Container } from './styles';

export default function SocialMedia() {
  return (
    <Container>
      <img src={Logo} alt="logo" className="img-fluid" />
    </Container>
  );
}
