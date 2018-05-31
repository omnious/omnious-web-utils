// Global import
import styled from 'styled-components';

// Local import
import { COLORS, SIZES } from '..';

export const StyledButton: any = styled.button`
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// TODO: Complete size
// /* size */
// ${({ size }) => {
//   switch (size) {
//     /* xl */
//     case 'xl':
//       return `
//         font-size: ${STYLES.h2};
//         padding: ${STYLES.lgRad} ${STYLES.xlRad};
//       `;
//     /* lg */
//     case 'lg':
//       return `
//         font-size: ${STYLES.h3};
//         padding: ${STYLES.mdRad} ${STYLES.lgRad};
//       `;
//     /* sm */
//     case 'sm':
//       return `
//         font-size: ${STYLES.h5};
//         padding: ${STYLES.xsRad} ${STYLES.smRad};
//       `;
//     /* xs */
//     case 'xs':
//       return `
//         font-size: ${STYLES.h6};
//         padding: ${STYLES.xsRad};
//       `;
//   }
// }}
