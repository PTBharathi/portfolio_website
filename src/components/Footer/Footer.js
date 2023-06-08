import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
    </LinkColumn>
    </LinkList>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:contact@gmail.com">mailto:contact@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialContainer>
      <CompanyContainer>
        <Slogan>
          Innovating one project at a time
        </Slogan>
      </CompanyContainer>
        <SocialIcons href='https://github.com/'>
      <AiFillGithub size="30px" />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/'>
      <AiFillInstagram size="30px"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/'>
      <AiFillLinkedin size="30px"/>
      </SocialIcons>
    </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
