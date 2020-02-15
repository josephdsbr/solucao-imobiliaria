import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 1% 5%;
  min-height: inherit;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
`;

export const Button = styled.button`
  background: #a01313;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 2rem;
  border: none;
  font-family: 'Roboto', Montserrat, sans-serif;
  color: #fff;
  transition: 0.5s;

  &:hover {
    background: ${darken(0.1, '#a01313')};
  }
`;

export const BodyContent = styled.div`
  display: grid;
  grid-template-rows: 70% 20% 10%;
  grid-template-columns: 70% 25%;
  grid-column-gap: 5%;
  grid-row-gap: 5%;
`;

export const Logo = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  max-height: 100%;
  align-items: flex-start;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-height: 250px;
      max-width: 250px;
    }

    span {
      color: #fff;
      font-style: normal;
      font-size: 4rem;
    }
  }
`;

export const Description = styled.div`
  grid-row: 2/5;
  height: 100%;
  grid-column: 1;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;

  span {
    font-family: 'Roboto', Montserrat, sans-serif;
    font-size: 5rem;
    text-align: center;
    color: #ffffff;
  }
`;

export const Form = styled.form`
  grid-row: 1/3;
  grid-column: 2;

  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  header {
    display: flex;
    flex-direction: column;

    img {
      max-width: 150px;
      max-height: 150px;
    }

    span {
      color: #fff;
      font-style: normal;
      font-size: 2rem;
    }
  }
`;

export const Input = styled.input`
  min-width: 80%;
  border: none;
  padding: 4% 3%;
  margin: 2% 0;
  border-radius: 4px;

  ::placeholder {
    color: #cccccc;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
  }
`;

export const SubmitButton = styled.button`
  background: #000;
  color: #fff;
  border: 1px solid #fff;
  text-transform: uppercase;
  font-size: 2.3rem;
  padding: 1% 3%;
  border-radius: 4px;
`;

export const MobileInfo = styled.div`
  grid-column: 2;
  grid-row: 4;
`;
