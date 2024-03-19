import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const SIZES = {
    'small': {
      fontSize: '1rem',
      iconSize: '1rem',
      inputPaddingLeft: '1.5rem',
      outlineOffset: '0.125rem',
    },
    'large': {
      fontSize: '1.125rem',
      iconSize: '1.5rem',
      inputPaddingLeft: '2.25rem',
      outlineOffset: '0.25rem',
    }
  };

  const componentSize = SIZES[size];

  const NativeInput = styled.input`
    border: 0;
    border-bottom: 2px solid ${COLORS.black};
    color: inherit;
    font-size: ${componentSize.fontSize};
    font-weight: 700;
    padding: 0.375rem 0 0.375rem ${componentSize.inputPaddingLeft};
    outline-offset: ${componentSize.outlineOffset};
    width: 100%;
    
    &::placeholder {
      color: ${COLORS.gray700};
      font-weight: 400;
    }
  `;

  const IconWrapper = styled.div`
    bottom: 0;
    color: inherit;
    height: ${componentSize.iconSize};
    left: 0;
    pointer-events: none;
    position: absolute;
    margin: auto;
    top: 0;
    width: ${componentSize.iconSize};
  `;

  const IconInputWrapper = styled.div`
    color: ${COLORS.gray700};
    position: relative;
    width: ${width}px;
    
    &:hover {
      color: ${COLORS.black};
    }
  `;

  return (
      <IconInputWrapper width={width}>
        <IconWrapper>
          <Icon id={icon} size={componentSize.iconSize} strokeWidth="2" />
        </IconWrapper>
        <VisuallyHidden><label htmlFor="inputField">{label}</label></VisuallyHidden>
        <NativeInput id="inputField" placeholder={placeholder} />
      </IconInputWrapper>
  );
};

export default IconInput;
