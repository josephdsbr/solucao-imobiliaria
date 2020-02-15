import styled from 'styled-components';
import Bg from '../../../assets/bg.png';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${Bg});
`;

export const Content = styled.div`
  background: rgba(0, 0, 0, 0.8);
  min-height: inherit;
  height: 100%;
`;
