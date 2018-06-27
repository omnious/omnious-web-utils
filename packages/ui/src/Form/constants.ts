// Local import
import { CommonProps } from '../constants';

export interface FormProps extends CommonProps {
  disabled?: boolean;
  fields?: any[];
  isVertical?: boolean;
  title?: string;
  // handleForm(e: any): void;
}
