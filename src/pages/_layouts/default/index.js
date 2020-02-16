import React from 'react';
import PropTypes from 'prop-types';

import { Container, HeaderContent, SidebarContent, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <HeaderContent />
      <Content>
        <SidebarContent />
        {children}
      </Content>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
