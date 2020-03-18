import React from "react";
import { Switch as AntdSwitch } from "antd";
import "antd/es/switch/style/css";
import styled from "styled-components";

export interface SwitchProps {
  checked?: boolean;
  onChange: (checked: boolean, e: Event) => void;
}

const SwitchStyled = styled.div`
  .ant-switch-checked {
    background-color: #19a8e0;
  }
`;

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => (
  <SwitchStyled>
    <AntdSwitch checked={checked} onChange={onChange} />
  </SwitchStyled>
);

export default Switch;
