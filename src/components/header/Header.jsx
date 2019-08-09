import React from "react";
import styled from "styled-components";
import profileImage from "../../profile.jpg";
import { headerMenus } from "../constants";
import Toggle from "../../common/Toggle";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 6rem 0.2rem 6rem;
  height: 70px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.8;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const HeaderItem = styled.a`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  transition: border-bottom 0.3s ease;
  :hover {
    padding-bottom: 2px;
    border-bottom: 3px solid ${props => props.theme.miscColor};
  }
`;

const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    height: 140px;
    width: 140px;
  }
`;

export default ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <Image src={profileImage} alt="Arijit Saha" />
      <HeaderMenuContainer>
        {headerMenus.map(({ value, link }, idx) => {
          return (
            <HeaderItem key={`header_menu_${idx}`} href={`#${link}`}>
              {value}
            </HeaderItem>
          );
        })}
      </HeaderMenuContainer>
      <Toggle toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};
