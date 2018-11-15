import styled from 'styled-components';

const StyledTopList = styled.div`
  display: grid;
  max-width: 960px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 20px auto;
  th,
  td {
    border: ${props => props.theme.border};
    border-collapse: collapse;
    padding: 10px;
    background-color: ${props => props.theme.color};
    &:nth-child(2) {
      width: 300px;
    }
  }
`;

export default StyledTopList;
