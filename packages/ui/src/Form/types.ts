// Global import
import { FormHTMLAttributes } from 'react';

export interface FormFieldProps {}

export type Props = FormHTMLAttributes<HTMLFormElement> & {
  disabled?: boolean;
  fieldClass?: string;
  fields?: FormFieldProps[];
  titleClass?: string;
  vertical?: boolean;
  width?: string;
  onSubmit: (data: any) => void;
};

export type State = {
  data: any;
};
