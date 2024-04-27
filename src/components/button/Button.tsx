import { ReactNode, useCallback, useRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';
import { bgColor, fontWeight } from '@/utils/themeClient';

const CustomMuiButton = styled(MuiButton)<{ variant?: string; color?: string }>`
  color: ${({ variant, color }: { variant?: string; color?: string }) => {
    if (variant === 'contained' && color !== 'primary') {
      return 'white';
    }
    return null;
  }};
  font-weight: ${fontWeight.bold};
  &.-full-height {
    height: 100%;
  }
  &.-bg-white {
    background-color: ${bgColor.white};
  }
`;

const CustomCircularProgress = styled(CircularProgress)<{ className?: string }>`
  color: ${({ className }) => (className === 'contained' ? 'white' : null)};
`;

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableDelaySubmit?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  className,
  children,
  type = 'button',
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  isDisabled,
  isLoading = false,
  disableDelaySubmit = false,
  onClick,
  fullWidth = false,
}: ButtonProps) => {
  // 多重送信防止用(1秒間はボタンをクリックできない)
  const processing = useRef(false);
  const handleButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (processing.current) return;
      processing.current = true;

      if (onClick) onClick(event);

      if (disableDelaySubmit) {
        processing.current = false;
      } else {
        setTimeout(() => {
          processing.current = false;
        }, 500);
      }
    },
    [onClick, disableDelaySubmit]
  );

  return (
    <CustomMuiButton
      variant={variant}
      color={color}
      size={size}
      type={type}
      className={className}
      onClick={handleButton}
      disabled={isDisabled}
      fullWidth={fullWidth}
    >
      {!isLoading && <p>{children}</p>}
      {isLoading && <CustomCircularProgress className={variant} size={25} />}
    </CustomMuiButton>
  );
};
