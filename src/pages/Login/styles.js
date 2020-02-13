import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 1% 2%;
  height: 100%;
  overflow: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
  grid-template-rows: 60% 30% 10%;
  grid-template-columns: 50% 45%;
  grid-column-gap: 5%;
`;

export const Logo = styled.img`
  grid-row: 1;
  grid-column: 1;
  max-height: 250px;
  max-width: 250px;
`;

export const Description = styled.div`
  grid-row: 2/4;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  header {
    img {
      max-width: 150px;
      max-height: 150px;
    }
  }
`;

export const Input = styled.input`
  grid-row: 3/4;
  grid-column: 2;
`;

export const SubmitButton = styled.button``;

export const MobileInfo = styled.div``;
