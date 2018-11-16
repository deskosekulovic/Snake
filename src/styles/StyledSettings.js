import styled from 'styled-components';

const StyledSettings = styled.div`
  display: grid;
  justify-content: center;
  gap: 1em;
  max-width: 960px;
  margin-top: 20px;
  h3 {
    display: inline-block;
    width: 90px;
    align-self: auto;
  }
  input {
    padding: 0.5em;
    margin: 10px;
  }
  label {
    display: inline-block;
    text-align: end;
  }
`;

export const Form1 = styled.form`
  display: grid;
  align-items: center;
`;

export const Form2 = styled.form`
  display: grid;
`;

export const Block1 = styled.div`
  @media (min-width: 768px) {
    grid-column: 1/2;
  }
`;
export const Block2 = styled.div`
  @media (min-width: 768px) {
    grid-column: 2/3;
  }
`;
export const Block3 = styled.div`
  display: flex;
  @media (min-width: 768px) {
    grid-column: 2/3;
  }
  align-items: center;
`;

export default StyledSettings;
