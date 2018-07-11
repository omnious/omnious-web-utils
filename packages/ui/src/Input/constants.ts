// Local import
import { FormItemProps } from '../constants';

export interface InputProps extends FormItemProps {
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  type?: string;
  value?: string | null;
  width?: string;
  handleInput(name: string, value: string | null): void;
}
