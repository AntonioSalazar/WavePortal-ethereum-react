import React from 'react';

import { FooterContainer, FooterSpan, FooterLink } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSpan>This project is part of the <FooterLink href="https://buildspace.so/" target="_blank">Buildspace Tutorials</FooterLink></FooterSpan>
    </FooterContainer>
  )
}

export default Footer;