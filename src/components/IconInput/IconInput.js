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
      fontSize: '16px',
      iconSize: '16px',
      inputPaddingLeft: '24px',
      outlineOffset: 2,
    },
    'large': {
      fontSize: '18px',
      iconSize: '24px',
      inputPaddingLeft: '36px',
      outlineOffset: 4,
    }
  };

  const componentSize = SIZES[size];

  const NativeInput = styled.input`
    border: 0;
    color: inherit;
    font-size: ${componentSize.fontSize};
    width: 100%;
    padding: 6px 0 6px ${componentSize.inputPaddingLeft};
    
    &::placeholder {
      color: ${COLORS.gray700};
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
    border-bottom: 2px solid ${COLORS.black};
    color: ${COLORS.gray700};
    position: relative;
    width: ${width}px;

    & > ${NativeInput}:hover {
      color: ${COLORS.black};
    }
    
    & > ${NativeInput}:focus {
      color: ${COLORS.black};
      outline-offset: ${componentSize.outlineOffset}px;
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
