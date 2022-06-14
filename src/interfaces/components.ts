export interface BaseButtonType {
  text: string;
}

export interface Button extends BaseButtonType {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface SelectButtonType extends BaseButtonType {
  onPress: (provider: string) => void;
  checked: boolean;
  key: string | number;
}

export interface StereoImageIconType {
  name: string;
  size: number;
}
