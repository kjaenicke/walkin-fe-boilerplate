import React from "react";
import styled from "styled-components";

import "../../styles/global.css";
import Card from "../Card";
import Well from "../Well";
import Switch from "../Switch";

const EatNowSettingsStyled = styled.div`
  max-width: 471px;
`;
const WellContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SettingDetailsHeading = styled.h4`
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;
`;

const SettingSubtitle = styled.span`
  color: #515151;
  font-size: 1rem;
  display: inline-block;
  margin: 1rem 0 0 2rem;
`;

export interface EatNowSettingsProps {
  isEnabled: boolean;
  onEnableChange: (enabled: boolean) => void;
}

export const EatNowSettings: React.FC<EatNowSettingsProps> = ({
  isEnabled,
  onEnableChange
}) => (
  <EatNowSettingsStyled>
    <Card heading="Eat Now Features 🍽️">
      <SettingDetailsHeading>
        Do you want diners to be able to request tables?
      </SettingDetailsHeading>
      <Well>
        <WellContents>
          <span>Enabled</span>
          <Switch
            checked={isEnabled}
            onChange={checked => {
              onEnableChange(checked);
            }}
          />
        </WellContents>
      </Well>
      <SettingSubtitle>
        This setting determines whether or not diners can request to ‘Eat Now’
        at your restaurant.
      </SettingSubtitle>
    </Card>
  </EatNowSettingsStyled>
);

export default EatNowSettings;
