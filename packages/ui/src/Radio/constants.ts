// Local import
import { CommonProps } from '../constants';

export interface RadioItemProps {
  disabled?: boolean;
  label: string;
  value: any;
}

export interface RadioProps extends CommonProps {
  disabled?: boolean;
  isVertical?: boolean;
  items?: RadioItemProps[];
  name: string;
  selectedValue?: any;
  title?: string;
  handleRadio(name: string, value: any): void;
}
