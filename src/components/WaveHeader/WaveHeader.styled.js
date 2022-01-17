import styled from 'styled-components';

export const WaveCardContainer = styled.div`
  margin: 3.75rem auto 0 auto;
  width: 80%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WaveCardTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 3.55rem;
  background: -webkit-linear-gradient(#22c1c3, #fdbb2d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WaveCardSpan = styled.span`
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 1.50rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.875rem;
`;

export const Input = styled.input`
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: none;
  width: 60%;
`;

export const Button = styled.button`
  height: 100%;
  width: 30%;
  margin-left: 0.625rem;
  background: #0D1116;
  border: none;
  border-radius: 0.625rem;
  font-size: 16px;
  color: #fff;
  transition: all .3s ease;
  &:hover{
    background: #fff;
    color: #000;
    border: 3px solid #fff;
    cursor: pointer;
  }
`;

export const SendingMessageSpan = styled.span`
  font-family: 'Lato', sans-serif;
  color: #fff;
  margin-left: 1.2rem;
`;

export const NumberOfWaves = styled.span`
  color: #fff;
  font-family: 'Lato', sans-serif;
  margin-top: 1rem;
`;