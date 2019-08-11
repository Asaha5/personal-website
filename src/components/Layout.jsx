import React from "react";
import styled from "styled-components";
import HeaderContent from "./header/Header";
import AboutMeContent from "./about_me/AboutMe";
import TimelineResume from "./resume/TimelineResume";
import Contact from "./footer/Contact";
import SkillsDetail from "./skills/Skills";

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 0.8fr 2fr 3fr 2fr 1fr;
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
    border-bottom: 6px solid ${props => props.theme.miscColor};
    margin-top: 1rem;
  }
`;

const Header = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
`;

const AboutMe = styled(BorderedContainer)`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  position: relative;
  padding: 1rem 10rem 2rem 10rem;
  @media only screen and (max-width: 600px) {
    padding: 0;
    margin-top: 1.5rem;
  }
`;

const Resume = styled(BorderedContainer)`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
`;

const Skills = styled(BorderedContainer)`
  grid-row: 4 / 5;
  grid-column: 1 / -1;
  padding: 1rem 10rem 2rem 10rem;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Footer = styled.div`
  grid-row: 5 / 6;
  grid-column: 1 / -1;
`;

const TopButton = styled.a`
  display: inline-block;
  position: fixed;
  bottom: 45px;
  right: 30px;
  z-index: 99;
  color:  ${props => props.theme.miscColor};;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transition: all 0.35s ease-in;
  :hover {
    transform: scale(1.2)
  }
`;

export default ({toggleTheme}) => {
  return (
    <Layout>
      <Header>
        <HeaderContent toggleTheme={toggleTheme}/>
      </Header>
      <AboutMe id="aboutme">
        <AboutMeContent />
      </AboutMe>
      <Resume>
        <TimelineResume />
      </Resume>
      <Skills id="skills">
        <SkillsDetail />
      </Skills>
      <Footer id="footer">
        <Contact />
      </Footer>
      <TopButton href="#top" id="top-anchor">
        <i className="fas fa-arrow-circle-up" />
      </TopButton>
    </Layout>
  );
};

const showTopAnchor = () => {
  const topAnchorRef = document.getElementById("top-anchor");
  if(topAnchorRef){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(topAnchorRef.style.opacity !== 1){
        topAnchorRef.style.opacity = 1;
      }
    }
    else {
      if(topAnchorRef.style.opacity !== 0){
        topAnchorRef.style.opacity = 0;
      }
    }
  }
}

window.addEventListener("scroll", showTopAnchor);