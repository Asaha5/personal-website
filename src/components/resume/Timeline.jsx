import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  width: auto;
`

const YearCircle = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.timelineColor};
  flex: 0 0 90px;
  position: relative;
  font-weight: 500;
  font-size: 1.2rem;
  :after {
    content: '${props => props.year}';
    position: absolute;
    top: 2.1rem;;
    left: ${props => props.year === "Present" ? `.9rem` : `.55rem`};
    font-weight: bold;
    white-space: nowrap;
  }
`

const Line = styled.div`
  width: 5px;
  height: 80%;
  background-color: ${props => props.theme.timelineColor};
  align-self: center;
`

export default ({startYear, endYear}) => {
  return(
    <TimelineContainer>
      <YearCircle year={endYear}></YearCircle>
      <Line/>
      <YearCircle year={startYear}></YearCircle>
    </TimelineContainer>
  )
}