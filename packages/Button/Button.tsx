import * as React from 'react';
import styled from 'styled-components';

import Spinner from '../Spinner';
import STYLES from '../constants/styles';

interface IProps {
  className?: string;
  color: string;
  invert: boolean;
  size: string;
  disabled: boolean;
  loading: boolean;
  onClick(): void;
}

const Button: React.SFC<IProps> = props => (
  <button className={props.className} disabled={props.disabled} onClick={props.onClick}>
    {props.loading ? <Spinner /> : props.children}
  </button>
);

const StyledButton = styled(Button)`
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

export default StyledButton;
