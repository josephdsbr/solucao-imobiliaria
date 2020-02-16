import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80px;
    max-height: 80px;
  }

  span {
    color: #ffffff;
    font-weight: bolder;
    font-size: 2rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #ffffff;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bolder;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: red;
  text-transform: uppercase;
`;
