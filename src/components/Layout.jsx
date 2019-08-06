import React from "react";
import styled from "styled-components";
import HeaderContent from './header/Header';
import AboutMeContent from './about_me/AboutMe';
import TimelineResume from "./resume/TimelineResume";
import Contact from "./footer/Contact";
import SkillsDetail from "./skills/Skills";

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: .8fr 2fr 3fr 2fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 1px;
`;

const BorderedContainer = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    width: 3%;
    height: 1px;
    bottom: 0;
    left: 48%;
    border-bottom: 6px solid var(--d-header-underline-color, orange);
    margin-top: 1rem;
  }
`

const Header = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
`

const AboutMe = styled(BorderedContainer)`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  position: relative;
  padding: 1rem 10rem 2rem 10rem;
`

const Resume = styled(BorderedContainer)`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
`

const Skills = styled(BorderedContainer)`
  grid-row: 4 / 5;
  grid-column: 1 / -1;
  padding: 1rem 10rem 2rem 10rem;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`

const Footer = styled.div`
  grid-row: 5 / 6;
  grid-column: 1 / -1;
`


export default () => (
  <Layout>
    <Header>
      <HeaderContent/>
    </Header>
    <AboutMe>
      <AboutMeContent/>
    </AboutMe>
    <Resume>
      <TimelineResume/>
    </Resume>
    <Skills>
      <SkillsDetail/>
    </Skills>
    <Footer>
      <Contact/>
    </Footer>
  </Layout>
);
