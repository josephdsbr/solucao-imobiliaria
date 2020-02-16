import styled from 'styled-components';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
`;

export const HeaderContent = styled(Header)``;

export const SidebarContent = styled(Sidebar)``;
