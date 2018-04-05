import * as React from 'react';
import styled from 'styled-components';

import { Spinner } from '../';
import { COLORS, SIZES } from '../Styles';

// interface
interface Props {
  className?: string;
  color: string;
  disabled: boolean;
  fullWidth?: boolean;
  icon?: string;
  invert: boolean;
  loading: boolean;
  size: string;
  onClick(): void;
}

const ButtonComponent: React.SFC<Props> = ({ children, className, disabled, icon, loading, onClick }): JSX.Element => {
  if (loading)
    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        <Spinner />
      </button>
    );

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {icon && <img src={icon} alt="Button icon" />}
      {children}
    </button>
  );
};

export const Button = styled(ButtonComponent)`
  /* border: 1px solid transparent; */
  border-radius: ${SIZES.xsRad};
  /* box-shadow: ${COLORS.buttonShadow}; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  width: ${({ fullWidth }) => fullWidth ? '100%' : ''};

  /* size */
  ${({ size }) => {
    switch (size) {
      case 'xl':
        return `
          font-size: ${SIZES.h2};
          padding: ${SIZES.lgRad} ${SIZES.xlRad};
        `;
      case 'lg':
        return `
          font-size: ${SIZES.h3};
          padding: ${SIZES.mdRad} ${SIZES.lgRad};
        `;
      case 'sm':
        return `
          font-size: ${SIZES.h5};
          padding: ${SIZES.xsRad} ${SIZES.smRad};
        `;
      case 'xs':
        return `
          font-size: ${SIZES.h6};
          padding: ${SIZES.xsPad};
        `;
      default:
        return `
          font-size: ${SIZES.h4};
          padding: ${SIZES.smRad} ${SIZES.mdRad};
        `;
    }
  }}

  /* color */
  ${({ color, invert }) => {
    switch (color) {
      case 'primary': {
        if (invert) {
          return `
            background-color: transparent;
            border: 1px solid ${COLORS.primaryBlue};
            box-shadow: ${COLORS.lightShadow};
            color: ${COLORS.primaryBlue};

            &:hover {
              background: ${COLORS.primaryBlue};
              color: ${COLORS.white};
            }
          `;
        }

        return `
          background-color: ${COLORS.primaryBlue};
          border: 1px solid ${COLORS.darkBlue};
          box-shadow: ${COLORS.buttonShadow};
          color: ${COLORS.white};

          &:hover {
            background-color: ${COLORS.primaryBlueHov};
          }
        `;
      }
      case 'secondary': {
        if (invert) {
          return `
            background-color: transparent;
            border: 1px solid ${COLORS.secondaryBlue};
            color: ${COLORS.white};
          `;
        }

        return `
          background-color: none;
        `;
      }
      default: {
        if (invert) {
          return `
            background: transparent;
            border: 2px solid ${COLORS.defaultGray};
            color: ${COLORS.defaultGray};

            &:hover {
              background: ${COLORS.defaultGray};
              color: ${COLORS.black};
            }
          `;
        }

        return `
          background: ${COLORS.defaultGray};
        `;
      }
    }
  }}

  &:focus {
    outline: none;
  }

  &:disabled {
    color: graytext;
    cursor: not-allowed;
  }
`;
