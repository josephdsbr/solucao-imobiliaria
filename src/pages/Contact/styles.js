import styled from 'styled-components';
import { Form as RocketForm, Input as RocketInput } from '@rocketseat/unform';
import LoginForm from '../../components/LoginForm';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5%;
`;

export const AccessForm = styled(LoginForm)``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled(RocketForm)`
  min-width: 80%;
  display: flex;
  flex-direction: column;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 200px;
    max-height: 200px;
  }

  span {
    font-size: 4rem;
    font-weight: bolder;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 4rem;
  }

  span,
  h1 {
    color: #ffffff;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

export const Button = styled.button`
  background: #267b18;
  border: none;
  padding: 2% 1%;
  width: 20%;
  align-self: flex-end;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Input = styled(RocketInput)`
  margin: 10px 0;
  padding: 15px;
  border: none;
  border-radius: 5px;

  color: #999999;
  font-weight: 700;
  font-size: 2rem;
`;
