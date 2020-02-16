import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${props =>
    !props.display &&
    css`
      display: none;
    `}
`;

export const Content = styled.div`
  background: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 90%;
`;

export const Header = styled.header`
  border-bottom: 1px solid #666666;
  display: flex;
  justify-content: center;

  img {
    width: 120px;
    height: 100px;
    margin: 4% 0;
  }

  margin-bottom: 4%;
`;

export const Address = styled.p`
  color: #333333;
  font-size: 1.8rem;
`;

export const RentInfo = styled.p`
  color: #333333;
  font-size: 1.8rem;
`;

export const Button = styled.button`
  width: 100%;
  background: #000000;
  text-align: center;
  color: #ffffff;
  font-size: 1.6rem;
  padding: 2% 0;
  border: none;
  border-radius: 10px;
`;
