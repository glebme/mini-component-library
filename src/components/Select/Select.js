import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const SelectBox = styled.div`
    align-items: center;
    display: flex;
    background-color: ${COLORS.transparentGray35};
    border: 2px solid transparent;
    border-radius: 8px;
    color: ${COLORS.gray700};
    padding: 12px 16px;
    position: relative;
    text-align: center;
    width: fit-content;
    
    & > :not(:first-child) {
      padding-left: 24px;
    }
    
    &:focus {
      border-color: ${COLORS.primary};
    }

    &:hover {
      color: ${COLORS.black};
    }
    
    & select {
      opacity: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  `;

  return (
      <SelectBox aria-label={label}>
        <p>
           {displayedValue}
        </p>
        <Icon id="chevron-down"/>
        <select value={value} onChange={onChange}>
          {children}
        </select>
      </SelectBox>
  );
};

export default Select;
