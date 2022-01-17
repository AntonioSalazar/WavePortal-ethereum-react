import styled from 'styled-components';

export const Button = styled.button`
  background: #007DD5;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  width: 14.375rem;
  justify-content: space-around;
  border: 1px solid transparent;
  transition: all .3s ease;
  &:hover{
    cursor: pointer;
    border:1px solid #fff;
  }
  position: absolute;
  top: 3.125rem;
  right: 6.25rem;
`;

export const Img = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  padding: 0.375rem;
`;

export const Span = styled.span`
  font-family: 'Lato', sans-serif;
  color:#fff;
  font-size: 1rem;
`;

export const AccountSpan = styled.span`
  position: absolute;
  top: 3.125rem;
  right: 6.25rem;
  color: #fff;
  &:hover{
      background: -webkit-linear-gradient(#22c1c3, #fdbb2d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
`;