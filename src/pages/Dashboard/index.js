import React from 'react';
import { FaCircle } from 'react-icons/all';
import { Container, Title, Info, FormattedDetails, Cards } from './styles';

import Image from '../../assets/home-photo.png';

export default function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Info>
        <span>
          <FaCircle size={22} color="green" /> Cliente interessado em comprar ou
          alugar
        </span>
        <span>
          <FaCircle size={22} color="red" /> Cliente interessado em vender ou
          colocar para alugar
        </span>
      </Info>
      <Cards>
        <FormattedDetails
          rent={500}
          street="Rua X nº 35 Bairro Amazonas"
          id={1}
          photo={Image}
        />
        <FormattedDetails
          rent={500}
          street="Rua X nº 35 Bairro Amazonas"
          id={1}
          photo={Image}
        />
        <FormattedDetails
          rent={500}
          street="Rua X nº 35 Bairro Amazonas"
          id={1}
          photo={Image}
        />
        <FormattedDetails
          rent={500}
          street="Rua X nº 35 Bairro Amazonas"
          id={1}
          photo={Image}
          forSale={false}
        />
      </Cards>
    </Container>
  );
}
