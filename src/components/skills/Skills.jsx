import React from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import { skills } from "../constants";
import Stars from "./Stars";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SkillItemsContainer = styled.div`
  padding: 3rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const SkillItem = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SkillSubHeader = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  list-style-type: none;
  color: ${props => props.theme.cardSubHeader};
  margin: 0.5rem;
  flex: 0 0 250px;
  @media only screen and (max-width: 600px) {
    flex: 0 0 180px;
  }
`;

export default () => {
  return (
    <SkillsContainer>
      <SectionHeader>Skills/ Technologies I know</SectionHeader>
      <SkillItemsContainer>
        {skills.map(({ skill, rating }, idx) => {
          return (
            <SkillItem key={`skill_item_${skill}_${idx}`}>
              <SkillSubHeader>{skill}</SkillSubHeader>
              <Stars
                fontSize={"1.2rem"}
                rating={rating}
                keyIdx={idx}
              />
            </SkillItem>
          );
        })}
      </SkillItemsContainer>
    </SkillsContainer>
  );
};
