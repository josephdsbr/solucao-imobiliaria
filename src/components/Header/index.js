import React from 'react';

import { Container, CompanyInfo, UserInfo, Button, Content } from './styles';
import Logo from '../../assets/home-logo.png';
import UserPhoto from '../../assets/default_user_profile.png';

export default function Header() {
  return (
    <Container>
      <CompanyInfo>
        <img src={Logo} alt="logo" />
        <span>Real Estate Solution</span>
      </CompanyInfo>
      <UserInfo>
        <img src={UserPhoto} alt="user" />
        <Content>
          <span>José Vinícius</span>
          <Button>Close</Button>
        </Content>
      </UserInfo>
    </Container>
  );
}
