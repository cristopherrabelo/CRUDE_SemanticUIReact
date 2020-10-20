import styled from 'styled-components';

export const Container = styled.div`
  width:100%;

`;

export const Lista = styled.div`
  padding: 20px 5px;

  @media (min-width: 768px) {
    padding: 20px 40px;
    
  }
`;

export const HeaderTabela= styled.div`
  padding: 20px 5px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 5px 0px;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    
  }
`;


