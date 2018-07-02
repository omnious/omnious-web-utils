// Global import
import { css } from 'styled-components';

// Local import
import { COLORS, SIZES } from '.';

export const BasicButton: any = css`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: ${SIZES.xsRad};
  cursor: pointer;
  display: flex;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s;
  padding: ${({ size }: any): string => {
    switch (size) {
      case 'xs':
        return '8px 6px';
      case 'sm':
        return '10px 8px;';
      case 'lg':
        return '18px 15px;';
      case 'xl':
        return '21px 18px;';
      case 'md':
      default:
        return '12px 15px;';
    }
  }};
  ${({ color, isInvert }: any): string => {
    switch (color) {
      case 'primary': {
        if (isInvert) {
          return `
            border: 1px solid ${COLORS.primaryBlue};
            color: ${COLORS.primaryBlue};

            &:focus {
              outline: 1px auto ${COLORS.primaryBlue};
            }

            &:hover {
              background-color: ${COLORS.primaryBlue};
              color: ${COLORS.white};
            }
          `;
        }

        return `
          background-color: ${COLORS.primaryBlue};
          box-shadow: ${COLORS.buttonShadow};
          color: ${COLORS.white};

          &:focus {
            outline: 1px auto ${COLORS.primaryBlue};
          }

          &:hover {
            background-color: ${COLORS.darkenBlue};
          }
        `;
      }
      case 'danger': {
        if (isInvert) {
          return `
            border: 1px solid ${COLORS.primaryRed};
            color: ${COLORS.primaryRed};

            &:focus {
              outline: 1px auto ${COLORS.primaryRed};
            }

            &:hover {
              background-color: ${COLORS.primaryRed};
              color: ${COLORS.white};
            }
          `;
        }

        return `
          background-color: ${COLORS.primaryRed};
          box-shadow: ${COLORS.buttonShadow};
          color: ${COLORS.white};

          &:focus {
            outline: 1px auto ${COLORS.primaryRed};
          }

          &:hover {
            background-color: ${COLORS.darkenRed};
          }
        `;
      }
      case 'none': {
        return ``;
      }
      case 'default':
      default: {
        if (isInvert) {
          return `
            border: 1px solid ${COLORS.primaryGray};
            color: ${COLORS.primaryBlack};

            &:focus {
              outline: 1px auto ${COLORS.primaryGray};
            }

            &:hover {
              background-color: ${COLORS.primaryGray};
            }
          `;
        }

        return `
          background-color: ${COLORS.primaryGray};
          box-shadow: ${COLORS.buttonShadow};
          color: ${COLORS.primaryBlack};

          &:focus {
            outline: 1px auto ${COLORS.primaryGray};
          }

          &:hover {
            background-color: ${COLORS.darkenGray};
            color: ${COLORS.white};
          }
        `;
      }
    }
  }};
`;
