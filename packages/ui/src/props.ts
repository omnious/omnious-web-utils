export interface CommonProps {
  className?: string;
}

export interface FormItemProps extends CommonProps {
  disabled?: boolean;
  name: string;
  // placeholder?: string;
  // title?: string;
  // value?: any;
}
