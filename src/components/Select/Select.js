import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Wrapper = styled.div`
    position: relative;
    width: max-content;
  `;

  const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* Allow the select to span the full height in Safari */
    -webkit-appearance: none;
  `;

  const SelectBox = styled.div`
    background-color: ${COLORS.transparentGray35};
    border-radius: 8px;
    color: ${COLORS.gray700};
    font-size: 1rem;
    padding: 12px 52px 12px 16px;
    
    & > * {
      display: inline-block;
    }

    ${NativeSelect}:hover + & {
      color: ${COLORS.black};
    }

    ${NativeSelect}:focus + & {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }
  `;

  const IconWrapper = styled.div`
    bottom: 0;
    height: var(--size);
    pointer-events: none;
    position: absolute;
    margin: auto;
    right: 10px;
    top: 0;
    width: var(--size);
  `;

  return (
      <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <SelectBox aria-label={label}>
          <p>
             {displayedValue}
          </p>
          <IconWrapper style={{'--size': 24 + 'px'}}>
            <Icon id="chevron-down" strokeWidth="2" size="24"/>
          </IconWrapper>
        </SelectBox>
      </Wrapper>
  );
};

export default Select;
