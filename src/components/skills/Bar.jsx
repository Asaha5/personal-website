import React from "react";
import styled from "styled-components";
import {ratingToLevelMap} from "../constants";

const Bar = styled.div`
  position: relative;
  height: 1.2rem;
  width: ${props => `${props.rating * 15}%`};
  background-color: ${props => props.theme.barColors[props.rating]};
  align-self: center;
  cursor: pointer;
  :after {
      content: '${props => `${ratingToLevelMap[props.rating]}`}';
      visibility: hidden;
      position: absolute;
      left: 102%;
      top: -10px;
      width: max-content;
      height: 1rem;
      border-radius: 3%;
      background-color: ${props => props.theme.mode === "light" ? `#515151` : `#F3F3F3`};
      color: ${props => props.theme.mode === "light" ? `#F3F3F3` : `#515151`};
      padding: .5rem .8rem .7rem .8rem;
      font-weight: bold;
      z-index: 9;
    }
  :hover {
    :after {
      visibility: visible;
    }
  }

  @media only screen and (max-width: 600px) {
    :after {
      display: none;
    }
  }
`;

export default ({ rating }) => {
  return <Bar rating={rating} />;
};
