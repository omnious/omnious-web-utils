import * as React from 'react';
import styled from 'styled-components';

import { Spinner } from '../';
import { STYLES } from '../constants/styles';

// interface
interface Props {
  className?: string;
  color: string;
  icon?: string;
  invert: boolean;
  size: string;
  disabled: boolean;
  loading: boolean;
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
      {icon && <img src={icon} />}
      {children}
    </button>
  );
};

export const Button = styled(ButtonComponent)`
  border: 2px solid transparent;
  border-radius: ${STYLES.smRad};
  box-shadow: 0 2px 4px 0 ${STYLES.buttonShadow};
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s;

  /* size */
  ${({ size }) => {
    switch (size) {
      /* xl */
      case 'xl':
        return `
          font-size: ${STYLES.h2};
          padding: ${STYLES.lgRad} ${STYLES.xlRad};
        `;
      /* lg */
      case 'lg':
        return `
          font-size: ${STYLES.h3};
          padding: ${STYLES.mdRad} ${STYLES.lgRad};
        `;
      /* sm */
      case 'sm':
        return `
          font-size: ${STYLES.h5};
          padding: ${STYLES.xsRad} ${STYLES.smRad};
        `;
      /* xs */
      case 'xs':
        return `
          font-size: ${STYLES.h6};
          padding: ${STYLES.xsRad};
        `;
      /* md */
      default:
        return `
          font-size: ${STYLES.h4};
          padding: ${STYLES.smRad} ${STYLES.mdRad};
        `;
    }
  }}

  /* color */
  ${({ color, invert }) => {
    switch (color) {
      /* primary */
      case 'primary': {
        /* invert */
        if (invert) {
          return `
            background: transparent;
            border: 2px solid ${STYLES.primaryBlue};
            color: ${STYLES.primaryBlue};

            :hover {
              background: ${STYLES.primaryBlue};
              color: ${STYLES.white};
            }
          `;
        }

        return `
          background: ${STYLES.primaryBlue};
          color: ${STYLES.white};

          :hover {
          }
        `;
      }
      /* secondary */
      case 'secondary': {
        /* invert */
        if (invert) {
          return `
          `;
        }

        return `
        `;
      }
      /* default */
      default: {
        /* invert */
        if (invert) {
          return `
            background: transparent;
            border: 2px solid ${STYLES.defaultGray};
            color: ${STYLES.defaultGray};

            :hover {
              background: ${STYLES.defaultGray};
              color: ${STYLES.black};
            }
          `;
        }

        return `
          background: ${STYLES.defaultGray};
        `;
      }
    }
  }}

  :focus {
    outline: none;
  }

  :disabled {
    color: graytext;
    cursor: not-allowed;
  }
`;
