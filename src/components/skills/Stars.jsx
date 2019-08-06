import React from "react";
import styled from "styled-components";

const StarContainer = styled.span`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  align-self:center;
`;

export default ({ rating, fontSize, color, keyIdx }) => {
  const unCheckedStars = 5 - rating;
  return (
    <>
      {[...Array(rating).keys()].map((item, idx) => {
        return (
          <StarContainer
            fontSize={fontSize}
            color={'#7DBEFF'}
            key={`checked_star_${keyIdx}_${item}_${idx}`}
          >
            <i class="fas fa-star" />
          </StarContainer>
        );
      })}
      {[...Array(unCheckedStars).keys()].map((item, idx) => {
        return (
          <StarContainer
            fontSize={fontSize}
            color={color}
            key={`uncheked_star_${keyIdx}_${item}_${idx}`}
          >
            <i class="far fa-star"></i>
          </StarContainer>
        );
      })}
    </>
  );
};
