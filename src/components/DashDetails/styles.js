import styled, { css } from 'styled-components';

export const Content = styled.div`
  background: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: auto;
  max-width: 300px;
  ${props =>
    props.forSale
      ? css`
          background: #682407;
        `
      : css`
          background: #0f6807;
        `}
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
  color: #ffffff;
  font-size: 1.8rem;
`;

export const RentInfo = styled.p`
  color: #ffffff;
  font-size: 1.8rem;
`;

export const Button = styled.button`
  background: #000000;
  text-align: center;
  color: #ffffff;
  font-size: 1.6rem;
  padding: 2% 0;
  border: none;
  width: 100%;
  border-radius: 10px;
`;
