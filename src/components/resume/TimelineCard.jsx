import React from "react";
import styled from "styled-components";

const TimelineCardContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  flex-direction: column;
  padding: 0.8rem;
  margin-left: 2rem;
`;

const CardHeader = styled.h3`
  display: block;
  width: auto;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 1.8rem;
  border-bottom: 2px solid ${props => props.theme.timelineColor};
  margin: 0.2rem;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const RolesAndResponsibilitiesContainer = styled.div`
  flex: 0 0 60%;
`;

const SkillsContainer = styled.div``;

const CardContentSubHeader = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  list-style-type: none;
  color: ${props => props.theme.cardSubHeader};
  margin: 0.5rem;
`;

const CardContentDescription = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0.5rem;
`;

export default ({ designation, company, role, skills }) => {
  return (
    <TimelineCardContainer>
      <CardHeader>{company}</CardHeader>
      <CardContent>
        <RolesAndResponsibilitiesContainer>
          <CardContentSubHeader>Designation</CardContentSubHeader>
          <CardContentDescription>{designation}</CardContentDescription>
          <CardContentSubHeader style={{marginTop: '1.2rem'}}>Roles & Responsibilities</CardContentSubHeader>
          <CardContentDescription>{role}</CardContentDescription>
        </RolesAndResponsibilitiesContainer>
        <SkillsContainer>
          <CardContentSubHeader>Technologies Used</CardContentSubHeader>
          <CardContentDescription>{skills}</CardContentDescription>
        </SkillsContainer>
      </CardContent>
    </TimelineCardContainer>
  );
};
