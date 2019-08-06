import React from "react";
import styled from "styled-components";
import { aboutMe } from "../constants";
import SectionHeader from "../SectionHeader";

const AboutMeContainer = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const AboutMeContent = styled.p`
  display: block;
  text-decoration: transparent;
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  font-style: italic;
`;

export default () => {
  return (
    <AboutMeContainer>
      <SectionHeader>Who Am I?</SectionHeader>
      <AboutMeContent>{aboutMe}</AboutMeContent>
    </AboutMeContainer>
  );
};
