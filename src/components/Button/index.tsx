import React from "react";
import styled from "styled-components";

export interface Props {
  look: "default" | "primary" | "success" | "warning" | "danger";
  onClick: Function;
  children: React.ReactNode;
  testFunction?: () => void;
}

const buttonColor = {
  default: "#ffffff",
  primary: "#0000ff",
  success: "#00ff00",
  warning: "#ffa500",
  danger: "#ff0000"
};

const StyledButton: React.FC<Props> = styled.button`
  background: ${(props: Props) => buttonColor[props.look]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Button: React.FC<Props> = ({ children, ...props }: Props) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
