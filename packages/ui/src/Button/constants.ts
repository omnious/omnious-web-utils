// Local import
import { ColorSet, CommonProps } from '../constants';

export interface ButtonProps extends CommonProps {
  color?: ColorSet;
  disabled?: boolean;
  href?: string;
  icon?: string;
  isInvert?: boolean;
  isLoading?: boolean;
  size?: string;
  type?: string;
  value?: string;
  handleButton?(e: any): void;
}
