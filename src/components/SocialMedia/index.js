import React from 'react';

import SocialMediaPhoto from '../../assets/mobile.png';

import { Container } from './styles';

export default function SocialMedia() {
  return (
    <Container>
      <img src={SocialMediaPhoto} alt="social-media" className="img-fluid" />
    </Container>
  );
}
