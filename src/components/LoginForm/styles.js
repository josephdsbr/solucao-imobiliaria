import styled from 'styled-components';
import { Form as RocketForm, Input as RocketInput } from '@rocketseat/unform';

export const Form = styled(RocketForm)`
  background: rgba(0, 0, 0, 0.3);
  min-height: 350px;
  max-height: 450px;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  border: 1px solid #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FormHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    max-height: 150px;
    max-width: 150px;
  }

  span {
    color: #fff;
    font-size: 1.8rem;
    font-weight: bolder;
  }
`;

export const FormContent = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled(RocketInput)`
  padding: 5% 3% 5% 5%;
  margin: 5% 0;
  &::placeholder {
    color: #cccccc;
    font-weight: bolder;
  }
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  text-transform: uppercase;
  padding: 4% 15%;
  background: #000000;
  font-weight: bolder;
  font-size: 1.5rem;
  margin-top: 10px;
`;
