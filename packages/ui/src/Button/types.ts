// Global import
import { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  invert?: boolean;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  width?: string;
  onClick?: (value: any, name: any) => void;
};
