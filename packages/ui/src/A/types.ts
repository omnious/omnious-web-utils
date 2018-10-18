// Global import
import { AnchorHTMLAttributes } from 'react';

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  icon?: string;
  invert?: boolean;
  size?: string;
};
