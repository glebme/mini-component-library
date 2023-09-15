/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const ProgressMeter = styled.div`
    background-color: hsla(0, 0%, 50%, 0.15);
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 50%, 0.35) inset;
    display: flex;
    height: 24px;
    padding: 4px;
    width: 370px;
  `;
  const ProgressMeterFill = styled.svg`
    background-color: hsla(240, 80%, 60%, 1);
    border-radius: ${(props) => props.value !== 100 ? '4px 0 0 4px' : '4px'};
    width: ${(props) => props.value + '%'}
  `;

  return (
      <ProgressMeter
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
      >
        <ProgressMeterFill value={value}/>
      </ProgressMeter>
  );
};

export default ProgressBar;
