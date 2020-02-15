import React from 'react';
import HomeLogo from '../../assets/home-logo.png';
import MobileLogo from '../../assets/mobile.png';
import HomePhoto from '../../assets/home-photo.png';

import {
  Container,
  Content,
  Info,
  Side,
  Item,
  MobileInfo,
  Button,
} from './styles';

export default function About() {
  return (
    <Container>
      <Content>
        <Info>
          <header>
            <img src={HomeLogo} alt="real-state-solution" />
            <span>Real Estate Solution</span>
            <h1>ABOUT</h1>
          </header>
          <main>
            <p>
              You know that desire to have a house or apartment, but there is no
              way to pay? Your problem is solved with Real Estate Solution, we
              make the house available according to your interest and install it
              in a way that your pocket can afford come and meet us!
            </p>
          </main>
        </Info>
        <Side>
          <header>
            <img src={HomeLogo} alt="logo" />
            <section>
              <span>Real Estate Solution</span>
              <h1>Opções de Desejo</h1>
            </section>
          </header>
          <main>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
            <Item>
              <img src={HomePhoto} alt="" className="img-fluid" />
              <Button>Detalhes</Button>
            </Item>
          </main>
          <footer>
            <button type="button">Opções de Pagamento</button>
          </footer>
        </Side>
        <MobileInfo>
          <img
            src={MobileLogo}
            alt="real-estate-solution-mobile"
            className="img-fluid"
          />
        </MobileInfo>
      </Content>
    </Container>
  );
}
