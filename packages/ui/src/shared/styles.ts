// Global import
import styled, { css } from 'styled-components';

// Local import
import { black, blue, gray, red, shadow, white, green } from '../colors';
import { radius, font } from '../sizes';

export const ButtonBase: any = css`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  /* border-radius: ${radius.xs}; */
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

  &:hover {
    box-shadow: ${shadow.button};
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ color, invert }: any): string => {
    switch (color) {
      case 'primary':
      case 'blue': {
        if (invert) {
          return `
            background-color: transparent;
            border: 1px solid ${blue.primary};
            color: ${blue.primary};

            &:focus {
              outline: 1px auto ${blue.primary};
            }
          `;
        }

        return `
          background-color: ${blue.primary};
          color: ${white.primary};

          &:focus {
            outline: 1px auto ${blue.primary};
          }
        `;
      }
      case 'green': {
        if (invert) {
          return `
            background-color: transparent;
            border: 1px solid ${green.primary};
            color: ${green.primary};

            &:focus {
              outline: 1px auto ${green.primary};
            }
          `;
        }

        return `
          background-color: ${green.primary};
          color: ${white.primary};

          &:focus {
            outline: 1px auto ${green.primary};
          }
        `;
      }
      case 'danger':
      case 'red': {
        if (invert) {
          return `
            background-color: transparent;
            border: 1px solid ${red.primary};
            color: ${red.primary};

            &:focus {
              outline: 1px auto ${red.primary};
            }
          `;
        }

        return `
          background-color: ${red.primary};
          color: ${white.primary};

          &:focus {
            outline: 1px auto ${red.primary};
          }
        `;
      }
      case 'none': {
        return ``;
      }
      default: {
        if (invert) {
          return `
            background-color: transparent;
            border: 1px solid ${gray.primary};
            color: ${gray.primary};

            &:focus {
              outline: 1px auto ${gray.primary};
            }
          `;
        }

        return `
          background-color: ${gray.primary};
          color: ${black.primary};

          &:focus {
            outline: 1px auto ${gray.primary};
          }
        `;
      }
    }
  }};
`;

export const Viewer = styled.div`
  align-items: center;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 15rem;

  & > * {
    color: ${({ invert }) => (invert ? white.primary : black.primary)};
  }

  & > strong {
    font-size: ${font.h3};
  }
`;
