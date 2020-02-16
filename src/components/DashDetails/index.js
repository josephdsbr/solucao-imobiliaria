import React from 'react';
import PropTypes from 'prop-types';
import { Content, Header, Address, RentInfo, Button } from './styles';

export default function DashDetails({ id, photo, street, rent, forSale }) {
  return (
    <Content id={id} forSale={forSale}>
      <Header>
        <img src={photo} alt="new" />
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
  );
}

DashDetails.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  rent: PropTypes.number.isRequired,
  forSale: PropTypes.bool,
};

DashDetails.defaultProps = {
  forSale: true,
};
