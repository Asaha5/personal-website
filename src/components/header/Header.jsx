import React from "react";
import styled from "styled-components";
import profileImage from "../../profile.jpg";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 6rem 0.2rem 6rem;
  height: 70px;
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
  transition: border-bottom 0.3s ease;
  :hover {
    padding-bottom: 2px;
    border-bottom: 3px solid #FFAA55;
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

const headerMenus = ["Who Am I?", "What do I do?", "May I help?"];

export default () => {
  return (
    <HeaderContainer>
      <Image src={profileImage} alt="Arijit Saha" />
      <HeaderMenuContainer>
        {headerMenus.map((menu, idx) => {
          return <HeaderItem key={`header_menu_${idx}`}>{menu}</HeaderItem>;
        })}
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};
