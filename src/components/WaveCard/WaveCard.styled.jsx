import styled from 'styled-components';

export const CardContainer = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem;
  border-bottom: 1px solid transparent;
  border-radius: 1rem;
  transition: all .3s ease;
  &:hover{
    background: #fff;
    color: #000;
  }
`;

export const AddressAndMessage = styled.div`
  display: flex;
  justify-content: space-between;
`;