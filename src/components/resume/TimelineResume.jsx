import React from "react";
import styled, { keyframes } from "styled-components";
import SectionHeader from "../SectionHeader";
import Timeline from "./Timeline";
import TimelineCard from "./TimelineCard";
import {resumeItems} from "../constants";
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const TimelineResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const TimelineResumeItem = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  animation: 1s ${fadeInUpAnimation};
  :not(:first-child) {
    margin-top: 2rem;
  }
`;

export default () => {
  return (
    <TimelineResumeContainer>
      <SectionHeader>Career Timeline</SectionHeader>
      {resumeItems.map(({company, designation, role, skills, startYear, endYear}, idx) => {
        return (
          <TimelineResumeItem>
            <Timeline startYear={startYear} endYear={endYear}/>
            <TimelineCard designation={designation} company={company} role={role} skills={skills}/>
          </TimelineResumeItem>
        );
      })}
    </TimelineResumeContainer>
  );
};
