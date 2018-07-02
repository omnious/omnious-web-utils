// Local import
import { ColorSet, CommonProps } from '../constants';

export interface AnchorProps extends CommonProps {
  color?: ColorSet;
  disabled?: boolean;
  href: string;
  icon?: string;
  isInvert?: boolean;
  size?: string;
}
