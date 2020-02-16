import styled from 'styled-components';
import DashDetails from '../../components/DashDetails';

export const Container = styled.div`
  padding: 1% 4%;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: bolder;
`;

export const Info = styled.div`
  background: #e9e9e9;
  width: 100%;
  padding: 5px 3%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    margin: 4px 0;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 1.8rem;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 15px;
`;

export const FormattedDetails = styled(DashDetails)``;
