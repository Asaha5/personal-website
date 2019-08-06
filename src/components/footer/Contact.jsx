import React from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import { contactDetails } from "../constants";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ContactDetailContainer = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  @media only screen and (max-width: 600px) {
    align-self: center;
  }
`;

const ContactDetail = styled.p`
  font-size: 1.3rem;
`;

const IconContainer = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
  line-height: 2rem;
  vertical-align: middle;
  color: var(--d-text-color, white);
`;

const IconLink = styled.a`
  color: var(--d-text-color, white);
`;

export default () => {
  return (
    <FooterContainer>
      <SectionHeader>May I Help?</SectionHeader>
      <ContactContainer>
        <ContactDetailContainer>
          <ContactDetail>
            <IconContainer>
              <i class="fas fa-phone" />
            </IconContainer>
            {contactDetails.email}
          </ContactDetail>
        </ContactDetailContainer>
        <ContactDetailContainer>
          <ContactDetail>
            <IconContainer>
              <i class="fas fa-envelope" />
            </IconContainer>
            {contactDetails.email}
          </ContactDetail>
        </ContactDetailContainer>
        <ContactDetailContainer>
          <ContactDetail>
            <IconContainer>
              <IconLink href={contactDetails.linkedIn}>
                <i class="fab fa-linkedin" />
              </IconLink>
            </IconContainer>
          </ContactDetail>
        </ContactDetailContainer>
      </ContactContainer>
    </FooterContainer>
  );
};
