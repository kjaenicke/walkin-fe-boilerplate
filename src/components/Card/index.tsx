import React from "react";
import styled from "styled-components";

export interface CardProps {
  heading?: string;
  children: React.ReactNode;
}

const StyledCard = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  padding: 35px;
`;

const CardHeading = styled.h2`
  font-weight: 600;
  margin-bottom: 4rem;
  line-height: 2.5rem;
`;

export const Card: React.FC<CardProps> = ({ heading, children }) => (
  <StyledCard>
    {heading && <CardHeading>{heading}</CardHeading>}
    {children}
  </StyledCard>
);

export default Card;
