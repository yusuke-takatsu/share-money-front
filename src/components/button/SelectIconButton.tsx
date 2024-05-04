import styled from '@emotion/styled';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';
import { ArrowUpDownIcon } from '@/components/icons/ArrowUpDownIcon';
import { ArrowUpIcon } from '@/components/icons/ArrowUpIcon';

type MuiButtonColors = MuiButtonProps['color'];

interface ButtonIconProps {
  className?: string;
  open?: boolean;
  color?: MuiButtonColors;
  size?: 'small' | 'medium' | 'large';
}

const CustomMuiIconButton = styled(IconButton)`
  margin: 0;
  padding: 0;
`;

export const ButtonIconArrowDown = (props: ButtonIconProps) => {
  const { className, color, size, open } = props;

  return (
    <CustomMuiIconButton color={color} size={size} className={className}>
      {!open ? <ArrowDownIcon /> : <ArrowUpIcon />}
    </CustomMuiIconButton>
  );
};

export const ButtonIconArrowUpDown = (
  props: Exclude<ButtonIconProps, 'open'>
) => {
  const { className, color, size } = props;

  return (
    <CustomMuiIconButton color={color} size={size} className={className}>
      <ArrowUpDownIcon />
    </CustomMuiIconButton>
  );
};
