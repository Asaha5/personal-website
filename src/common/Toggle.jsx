import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.7rem;
  @media only screen and (max-width: 600px) {
    margin-top: 1.5rem;
  }
`;

const ToggleCheckbox = styled.input`
  visibility: hidden;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.35s;
  background-color: ${props => props.theme.miscColor};
  :before {
    content: "  ";
    position: absolute;
    width: 1.18rem;
    height: 1.2rem;
    top: 0.25rem;
    left: 0.28rem;
    background-color: ${props => props.theme.bgGradient.first.color};
    border-radius: 50%;
    transition: transform 0.35s;
    ${ToggleCheckbox}:checked + & {
      transform: translateX(20px);
    }
  }
  ${ToggleCheckbox}:checked + & {
      background-color: ${props => props.theme.textColor};
    }
`;

export default ({toggleTheme}) => {
  return (
    <ToggleContainer>
      <ToggleCheckbox type="checkbox" onClick={toggleTheme} />
      <Slider />
    </ToggleContainer>
  );
};
