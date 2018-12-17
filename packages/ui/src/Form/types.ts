// Global import
import { FormHTMLAttributes } from 'react';

export interface FieldItem {
  name: string;
  title: string;
}

export type Props = FormHTMLAttributes<HTMLFormElement> & {
  disabled?: boolean;
  fieldClass?: string;
  fields?: FieldItem[];
  titleClass?: string;
  vertical?: boolean;
  width?: string;
  onSubmit: (data: any) => void;
};

export type State = {
  data: any;
};
