// Global import
import styled, { css } from 'styled-components';

// Local import
import { PRIMARY, SECONDARY, SPECTRUM, black, white } from '../colors';
import { font } from '../sizes';

export const ButtonBase: any = css`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
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

  &:disabled {
    /* box-shadow: none; */
    cursor: not-allowed;
    /* opacity: 0.5; */
  }

  outline: 3px
    ${({ color, invert }) => {
      switch (color) {
        case 'primary':
        case 'blue': {
          return `
          background-color: ${SPECTRUM.gray8c};
          color: ${SPECTRUM.white};

          &:active,
          &:hover {
            background-color: ${PRIMARY.blue};
          }

          &:disabled {
            opacity: 0.5;
          }

          &:focus {
            background-color: ${PRIMARY.blue};
            outline: 3px solid ${SPECTRUM.gray3c};
          }
        `;
        }
        case 'green': {
          return `
          background-color: ${SPECTRUM.gray8c};
          color: ${SPECTRUM.white};

          &:active,
          &:hover {
            background-color: ${SECONDARY.green};
          }

          &:disabled {
            opacity: 0.5;
          }

          &:focus {
            background-color: ${SECONDARY.green};
            outline: 3px solid ${SPECTRUM.gray3c};
          }
        `;
        }
        case 'danger':
        case 'red': {
          return `
          background-color: ${SPECTRUM.gray8c};
          color: ${SPECTRUM.white};

          &:active,
          &:hover {
            background-color: ${PRIMARY.red};
          }

          &:disabled {
            opacity: 0.5;
          }

          &:focus {
            background-color: ${PRIMARY.red};
            outline: 3px solid ${SPECTRUM.gray3c};
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
            border: 1px solid ${SPECTRUM.gray6c};
            color: ${SPECTRUM.gray8c};

            &:active,
            &:hover {
              background-color: ${SPECTRUM.gray8c};
              border: 1px solid ${SPECTRUM.gray8c};
              color: ${SPECTRUM.white};
            }

            &:disabled {
              opacity: 0.5;
            }

            &:focus {
              background-color: ${SPECTRUM.gray8c};
              color: ${SPECTRUM.white};
              outline: 3px solid ${SPECTRUM.gray3c};
            }
          `;
          }

          return `
          background-color: ${SPECTRUM.gray8c};
          color: ${SPECTRUM.white};

          &:active,
          &:hover {
            background-color: ${SPECTRUM.gray11c};
          }

          &:disabled {
            opacity: 0.5;
          }

          &:focus {
            background-color: ${SPECTRUM.gray11c};
            outline: 3px solid ${SPECTRUM.gray3c};
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
