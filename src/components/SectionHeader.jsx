import styled from "styled-components";

export default styled.h1`
  display: block;
  padding-bottom: 5px;
  position: relative;
  text-align: center;
  justify-self: center;
  align-self: center;
  color: ${props => props.theme.headerTextColor};
  text-transform: capitalize;
  margin: .2rem;
  /* :before {
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border-bottom: 3px solid var(--d-header-underline-color, orange);
  } */
`;
