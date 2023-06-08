import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome To <br/>
    React Learning Club
    </SectionTitle>
    <SectionText>React is a declarative, efficient, and flexible JavaScript library for building Web Applications. 
      It follows component-based approach. Easy to create smaller components and build large-scale applications. The main goal is to build large-scale high-performance applications with smaller and reusable stateful components. 
      We provide ReactJS Training by Real-Time Experts with Real-Time Scenarios and always support.
    </SectionText>
    <Button onClick={()=>window.location='https://www.google.com'}>Learn More</Button>
  </LeftSection>
  </section>
);

export default Hero;