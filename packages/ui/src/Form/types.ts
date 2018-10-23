// Global import
import { FormHTMLAttributes } from 'react';

<<<<<<< HEAD
export interface FieldItem {
  name: string;
  title: string;
}
=======
export interface FormFieldProps {}
>>>>>>> 66e4b2a54716ef67a12a2ad64f8ae0c8680dc4d4

export type Props = FormHTMLAttributes<HTMLFormElement> & {
  disabled?: boolean;
  fieldClass?: string;
<<<<<<< HEAD
  fields?: FieldItem[];
=======
  fields?: FormFieldProps[];
>>>>>>> 66e4b2a54716ef67a12a2ad64f8ae0c8680dc4d4
  titleClass?: string;
  vertical?: boolean;
  width?: string;
  onSubmit: (data: any) => void;
};

export type State = {
  data: any;
};
