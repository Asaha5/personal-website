import React from "react";
import styled from "styled-components";

const StarContainer = styled.span`

  font-size: ${props => props.fontSize};
  color: ${props =>
    props.filled ? props.theme.filledStarColor : props.theme.textColor};
  align-self: center;

`;

export default ({ rating, fontSize, color, keyIdx }) => {
  const unCheckedStars = 5 - rating;
  return (
    <>
      {[...Array(rating).keys()].map((item, idx) => {
        return (
          <StarContainer
            fontSize={fontSize}
            filled={true}
            key={`checked_star_${keyIdx}_${item}_${idx}`}
          >
            <i className="fas fa-star" />
          </StarContainer>
        );
      })}
      {[...Array(unCheckedStars).keys()].map((item, idx) => {
        return (
          <StarContainer
            fontSize={fontSize}
            filled={false}
            key={`uncheked_star_${keyIdx}_${item}_${idx}`}
          >
            <i className="far fa-star" />
          </StarContainer>
        );
      })}
    </>
  );
};
