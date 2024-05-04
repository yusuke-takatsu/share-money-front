import styled from '@emotion/styled';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ButtonIconArrowDown } from '@/components/button/SelectIconButton';
import {
  bgColor,
  fontColor,
  fontSize,
  fontWeight,
  lineHeight,
} from '@/utils/themeClient';
import { OptionProps } from '@/utils/types/common';
import { useId } from 'react';

const baseHeightPx = '40px';

const Wrapper = styled('div')<{ labelPosition?: 'top' | 'left' }>`
  display: ${({ labelPosition }) =>
    labelPosition === 'left' ? 'flex' : 'block'};
  width: 100%;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.md};
`;

const CustomMuiSelect = styled(Select)<{ error: boolean }>`
  background-color: ${({ error }) =>
    error ? bgColor.rightRed : bgColor.white};
  width: 100%;
  padding-right: 0;

  .MuiSelect-select {
    padding: 10px 16px;
    height: ${lineHeight.md};
  }

  .MuiSvgIcon-root {
    display: none;
  }

  :has(:disabled) {
    background-color: ${bgColor.gray};
    svg {
      display: none;
    }
  }
`;

const Placeholder = styled('p')`
  color: ${fontColor.gray};
`;

const ButtonIconMore = styled(ButtonIconArrowDown)`
  margin-left: 10px;
  margin-right: 16px;
  pointer-events: none;
  position: absolute;
  right: 0px;
`;

const BaseLabel = styled('label')`
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
`;

const TopLabel = styled(BaseLabel)`
  display: block;
  margin-bottom: 5px;
`;

const LeftLabel = styled(BaseLabel)`
  height: ${baseHeightPx};
  line-height: ${baseHeightPx};
  margin-right: 8px;
  font-weight: ${fontWeight.bold};
`;

type Props<T extends FieldValues> = {
  setValue?: UseFormSetValue<T>;
  name: Path<T>;
  options: OptionProps[];
  onChange?: ((event?: SelectChangeEvent<unknown>) => void) | undefined;
  placeholder?: string;
  errors?: FieldError | undefined;
  disabled?: boolean;
  value?: any;
  register?: UseFormRegister<T>;
  defaultValue?: string;
  label: string;
  labelPosition?: 'top' | 'left';
};

type PositionedLabelProps = {
  id: string;
  position: 'top' | 'left';
};

export const SelectBox = <T extends FieldValues>({
  options,
  placeholder = '選択してください',
  onChange,
  errors,
  disabled,
  value,
  name,
  setValue,
  register,
  defaultValue = '',
  label,
  labelPosition = 'top',
}: Props<T>) => {
  const id = useId();

  const PositionedLabel = ({ id, position }: PositionedLabelProps) => {
    switch (position) {
      case 'top':
        return <TopLabel htmlFor={id}>{label}</TopLabel>;
      case 'left':
        return <LeftLabel htmlFor={id}>{label}</LeftLabel>;
      default:
        return null;
    }
  };

  return (
    <Wrapper labelPosition={labelPosition}>
      {label && <PositionedLabel id={id} position={labelPosition} />}
      <CustomMuiSelect
        style={{ borderRadius: '8px' }}
        defaultValue={defaultValue}
        value={value}
        displayEmpty
        endAdornment={<ButtonIconMore />}
        disabled={disabled}
        error={!!errors}
        {...(register &&
          register(name as keyof UseFormRegister<T>, {
            onChange: (e) => {
              if (!onChange || !setValue) return;
              setValue(name, e.target.value as any);
              onChange(e);
            },
          }))}
      >
        <MenuItem value="">
          <Placeholder>{placeholder}</Placeholder>
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={option.value === value}
          >
            {option.label}
          </MenuItem>
        ))}
      </CustomMuiSelect>
    </Wrapper>
  );
};
