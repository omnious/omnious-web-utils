// Local import
import { FormItemProps } from '../constants';

export interface DropdownItemProps {
  disabled?: boolean;
  label: string;
  value: any;
}

export interface DropdownProps extends FormItemProps {
  clearable?: boolean;
  items?: DropdownItemProps[];
  placeholder?: string;
  searchable?: boolean;
  selectedValue?: any;
  title?: string;
  width?: string;
  handleDropdown(name: string, value: any): void;
}
