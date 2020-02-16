import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/all';
import {
  Container,
  Content,
  Header,
  Address,
  RentInfo,
  Button,
} from './styles';

export default function Details({
  id,
  photo,
  street,
  rent,
  display,
  changeDisplay,
}) {
  return (
    <Container id={id} display={display}>
      <Content>
        {changeDisplay && (
          <FaWindowClose
            size={22}
            color="red"
            onClick={() => changeDisplay(false)}
          />
        )}
        <Header>
          <img src={photo} alt="details" />
        </Header>
        <Address>{street}</Address>
        {/* eslint-disable-next-line no-useless-escape */}
        <RentInfo>
          Aluguel: R${' '}
          {rent.toLocaleString('DE-de', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </RentInfo>
        <Button type="button">Marcar uma visita</Button>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  rent: PropTypes.number.isRequired,
  changeDisplay: PropTypes.func,
  display: PropTypes.bool,
};

Details.defaultProps = {
  display: false,
  changeDisplay: null,
};
