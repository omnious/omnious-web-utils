// Global import
import { ReactChildren } from 'react';

export enum COLORS {
  // Solid
  white = '#fff',
  creamWhite = '#fcfeff',
  primaryBlack = '#2d3438',
  secondaryBlack = '#333',
  lightenBlack = '#485056',
  primaryGray = '#dfe3e6',
  secondaryGray = '#dbe9ed',
  lightenGray = '#f8f9fd',
  darkenGray = '#6f848d',
  borderGray = '#cfdadf',
  primaryBlue = '#249cff',
  secondaryBlue = '#a9e1ff',
  lightenBlue = '#ebf7fc',
  darkenBlue = '#2486ff',
  borderBlue = '#3d70b2',
  primaryRed = '#ff5252',
  darkenRed = '#e34953',
  primaryGreen = '#23d798',
  primaryYellow = '#ffca50',

  // Shadow
  buttonShadow = '0 2px 4px 0 rgba(46, 74, 84, 0.15)',
  hoverShadow = '0 1px 16px 0 rgba(78, 117, 111, 0.14)',
  tileShadow = '0 3px 5px 0 rgba(77, 122, 140, 0.27)',
  menuShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.1)'

  // Gradient
  // // secondaryBlue: 'rgba(255, 255, 255, 0.5)',
  // // darkBlue: '#37ade9',
  // // lightBlue: '#53c3fa',
  // // defaultGray: '#e0e0e0',

  // // // Shadows
  // // primaryShadow: 'rgba(0, 0, 0, 0.1)',
  // // buttonShadow: '0 2px 4px 0 rgba(46, 74, 84, 0.15)',
  // // lightShadow: '0 2px 4px 0 rgba(255, 255, 255, 0.22)'
}

export enum SIZES {
  // Typography
  mega = '4.2rem',
  h1 = '2.6rem',
  h2 = '1.6rem',
  h3 = '1.2rem',
  h4 = '1rem',
  h5 = '0.8rem',

  // Spacing
  xlRad = '7px',
  lgRad = '6px',
  mdRad = '5px',
  smRad = '4px',
  xsRad = '3px',

  xlPad = '2rem',
  lgPad = '1.5rem',
  mdPad = '1rem',
  smPad = '0.8rem',
  xsPad = '0.5rem'
}

export enum ColorSet {
  primary = 'primary',
  danger = 'danger',
  default = 'default',
  none = 'none'
}

export interface CommonProps {
  children?: ReactChildren | string;
  className?: string;
}

export interface FormItemProps extends CommonProps {
  disabled?: boolean;
  name: string;
}
