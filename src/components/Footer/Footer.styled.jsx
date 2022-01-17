import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  background: #1C2332;
`;

export const FooterSpan = styled.span`
  font-family: 'Lato', sans-serif;
  color: #fff;
`;

export const FooterLink = styled.a`
  decoration: none;
  color: #fff;
  &:hover{
      background: -webkit-linear-gradient(#22c1c3, #fdbb2d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
`;