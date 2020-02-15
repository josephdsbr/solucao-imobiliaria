import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 30% 35% 15%;
  grid-row-gap: 5%;
`;

export const Info = styled.div`
  grid-column: 2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 2.5rem;
      font-weight: bolder;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: bolder;
    }

    h1,
    span {
      color: #fff;
    }

    img {
      max-height: 250px;
      max-width: 250px;
    }
  }

  main {
    max-width: 500px;
    font-size: 2.5rem;
    color: #fff;
    font-weight: bolder;
  }

  footer {
    button {
      padding: 5px 8px;
      border: 1px solid #fff;
      color: #fff;
      text-transform: uppercase;
      font-size: 2rem;
      background: transparent;
    }
  }
`;

export const Side = styled.aside`
  grid-column: 1;
  grid-row: 1/3;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  header {
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: center;

    img {
      max-height: 100px;
      max-width: 100px;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        color: #fff;
        font-size: 2rem;
        font-weight: bolder;
      }

      h1 {
        color: red;
        font-size: 1.5rem;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }
  }

  main {
    padding: 5px 10px;
    display: grid;
    max-height: 60%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  footer {
    button {
      padding: 5px 8px;
      border: 1px solid #fff;
      color: #fff;
      text-transform: uppercase;
      font-size: 2rem;
      background: transparent;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  background: #e9e9e9;
  width: 90%;
  padding: 1% 1.5%;
  color: #666666;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  border-radius: 5px;
  border: none;
`;

export const MobileInfo = styled.div`
  grid-column: 1/4;
  grid-row: 3;
`;
