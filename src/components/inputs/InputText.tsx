import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';
import { bgColor, fontSize, fontWeight, lineHeight } from '@/utils/themeClient';
import { useId } from 'react';

const baseHeightPx = '31px';

const Wrapper = styled('div')<{ labelPosition?: 'top' | 'left' }>`
  display: ${({ labelPosition }) =>
    labelPosition === 'left' ? 'flex' : 'block'};
  width: 100%;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.md};
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

const CustomTextField = styled(TextField)<{ placeholderColor?: string }>`
  width: 100%;

  .MuiOutlinedInput-root {
    background: ${bgColor.white};
  }
  .MuiInputBase-input {
    color: ${({ placeholderColor }) => placeholderColor || ''};
    padding: 0px 6px;
    height: ${baseHeightPx};
    border-radius: 4px;
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.normal};
    line-height: ${lineHeight.md};
  }
`;

// TextFieldPropsの型をオーバーライド
interface CustomTextFieldProps
  extends Omit<TextFieldProps, 'id' | 'label' | 'onClick'> {
  placeholderColor?: string;
}

// TextField要素以外の型
type AdditionalTextFieldProps = {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  label?: string;
  labelPosition?: 'top' | 'left';
  maxLength?: number;
};

export type InputTextProps = CustomTextFieldProps & AdditionalTextFieldProps;

type PositionedLabelProps = {
  id: string;
  position: 'top' | 'left';
};

export const InputText = (props: InputTextProps) => {
  const {
    onClick,
    inputProps,
    register,
    label,
    labelPosition = 'top',
    maxLength = 255,
    ...customTextFieldProps
  } = props;

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
    <Wrapper labelPosition={labelPosition} onClick={onClick}>
      {label && <PositionedLabel id={id} position={labelPosition} />}
      <CustomTextField
        id={id}
        type="text"
        {...customTextFieldProps}
        inputProps={{
          maxLength,
          ...inputProps,
        }}
        {...register}
      />
    </Wrapper>
  );
};
