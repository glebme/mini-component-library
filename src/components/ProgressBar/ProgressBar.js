/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
    const SIZES = {
        small: {
            '--progress-meter-border-radius': 4 + 'px',
            '--progress-meter-height': 8 + 'px',
        },
        medium: {
            '--progress-meter-border-radius': 4 + 'px',
            '--progress-meter-height': 12 + 'px',
        },
        large: {
            '--progress-meter-border-radius': 8 + 'px',
            '--progress-meter-height': 24 + 'px',
            '--progress-meter-padding': 4 + 'px',
        }
    }

    const styles = SIZES[size];
    console.log(styles);
    const ProgressMeter = styled.div`
      background-color: ${COLORS.transparentGray15};
      border-radius: var(--progress-meter-border-radius);
      box-shadow: 0 2px 4px 0 ${COLORS.transparentGray35} inset;
      display: flex;
      height: var(--progress-meter-height);
      padding: var(--progress-meter-padding);
      overflow: hidden;
      width: 370px;
      `;
    const Bar = styled.svg`
      background-color: ${COLORS.primary};
      width: ${(props) => props.value + '%'}
    `;

    const Trimmer = styled.div`
      border-radius: 4px;
      overflow: hidden;
      width: 100%;
    `;

    return (
      <ProgressMeter
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={styles}
      >
          <VisuallyHidden>{value}%</VisuallyHidden>
          <Trimmer>
              <Bar value={value}/>
          </Trimmer>
      </ProgressMeter>
    );
};

export default ProgressBar;
