// Local import
import { FormItemProps } from '../constants';

export interface InputProps extends FormItemProps {
  placeholder?: string;
  title?: string;
  type?: string;
  value?: string;
  handleInput(name: string, value: any): void;
}
