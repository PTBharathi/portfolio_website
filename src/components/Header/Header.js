import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaBattleNet } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex",alignItems:"center",color:"white",fontSize:"20px",marginBottom:"20px"}}>
          <FaBattleNet size="10rem" color="#b032eb"/><Span>React Learn Club</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Projects">
        <NavLink>Projects</NavLink>
          </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
          </Link>
      </li>
      <li>
        <Link href="#Software Training">
        <NavLink>Training</NavLink>
          </Link>
      </li>
      <li>
        <Link href="Internships">
        <NavLink>Internships</NavLink>
          </Link>
      </li><li>
        <Link href="Careers">
        <NavLink>Careers</NavLink>
          </Link>
      </li>
      <li>
        <Link href="About">
        <NavLink>About</NavLink>
          </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/'>
      <AiFillGithub size="30px" />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/'>
      <AiFillInstagram size="30px"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/'>
      <AiFillLinkedin size="30px"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
