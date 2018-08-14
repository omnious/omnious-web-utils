// Global import
import { css } from 'styled-components';

// Local import
import { black, blue, gray, red, shadow, white, green } from '../colors';
import { radius } from '../sizes';

export const ButtonBase: any = css`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: ${radius.xs};
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
  width: ${({ width }: any): string => width || ''};
  ${({ color, isInvert }: any): string => {
    switch (color) {
      case 'primary':
      case 'blue': {
        if (isInvert) {
          return `
            border: 1px solid ${blue.primary};
            color: ${blue.primary};

            &:focus {
              outline: 1px auto ${blue.primary};
            }

            &:hover {
              background-color: ${blue.primary};
              color: ${white.primary};
            }
          `;
        }

        return `
          background-color: ${blue.primary};
          box-shadow: ${shadow.button};
          color: ${white.primary};

          &:focus {
            outline: 1px auto ${blue.primary};
          }

          &:hover {
            background-color: ${blue.darken};
          }
        `;
      }
      case 'green': {
        if (isInvert) {
          return `
            border: 1px solid ${green.primary};
            color: ${green.primary};

            &:focus {
              outline: 1px auto ${red.primary};
            }

            &:hover {
              background-color: ${green.primary};
              color: ${white.primary};
            }
          `;
        }

        return `
          background-color: ${green.primary};
          box-shadow: ${shadow.button};
          color: ${white.primary};

          &:focus {
            outline: 1px auto ${green.primary};
          }

          &:hover {
            background-color: ${green.darken};
          }
        `;
      }
      case 'danger':
      case 'red': {
        if (isInvert) {
          return `
            border: 1px solid ${red.primary};
            color: ${red.primary};

            &:focus {
              outline: 1px auto ${red.primary};
            }

            &:hover {
              background-color: ${red.primary};
              color: ${white.primary};
            }
          `;
        }

        return `
          background-color: ${red.primary};
          box-shadow: ${shadow.button};
          color: ${white.primary};

          &:focus {
            outline: 1px auto ${red.primary};
          }

          &:hover {
            background-color: ${red.darken};
          }
        `;
      }
      case 'none': {
        return ``;
      }
      default: {
        if (isInvert) {
          return `
            border: 1px solid ${gray.primary};
            color: ${black.primary};

            &:focus {
              outline: 1px auto ${gray.primary};
            }

            &:hover {
              background-color: ${gray.primary};
            }
          `;
        }

        return `
          background-color: ${gray.primary};
          box-shadow: ${shadow.button};
          color: ${black.primary};

          &:focus {
            outline: 1px auto ${gray.primary};
          }

          &:hover {
            background-color: ${gray.darken};
            color: ${white.primary};
          }
        `;
      }
    }
  }};
`;
