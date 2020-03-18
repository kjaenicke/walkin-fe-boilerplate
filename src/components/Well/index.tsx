import React from "react";
import styled from "styled-components";
import "../../styles/global.css";

export interface WellProps {
  children: React.ReactNode;
}

const WellStyled: React.FC<WellProps> = styled.div`
  background: #f5f5f5;
  border-radius: 1rem;
  color: #000000;
  font-size: 1.3rem;
  padding: 1.2rem 2rem;
`;

export const Well: React.FC<WellProps> = ({ children, ...props }) => (
  <WellStyled {...props}>{children}</WellStyled>
);

export default Well;
