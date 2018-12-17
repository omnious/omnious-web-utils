// Global import
import { InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputClass?: string;
  titleClass?: string;
  onChange?: (value: any, name: any) => void;
};
