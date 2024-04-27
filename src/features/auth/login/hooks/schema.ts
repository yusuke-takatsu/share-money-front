import { EMAIL_FORMAT_TEXT } from '@/utils/constants/validationMessages';
import {
  maxStringSchema,
  requiredStringSchema,
} from '@/utils/helpers/genericSchema';
import { z } from 'zod';

export const loginSchema = z.object({
  email: maxStringSchema('メールアドレス', 255).email(
    EMAIL_FORMAT_TEXT('メールアドレス')
  ),
  password: requiredStringSchema('パスワード'),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const defaultValues: LoginForm = {
  email: '',
  password: '',
};
