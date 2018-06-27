// Local import
import { CommonProps } from '../constants';

export enum ButtonColor {
  primary = 'primary',
  danger = 'danger',
  default = 'default'
}

export interface ButtonProps extends CommonProps {
  /**
   * Color of Button component
   *
   * @default primary
   */
  color?: ButtonColor;
  disabled?: boolean;
  // href?: string;
  icon?: string;
  isInvert?: boolean;
  isLoading?: boolean;
  size?: string;
  // to?: string;
  type?: string;
  handleButton?(e: any): void;
}
