/**
 * @param name
 * @returns
 */
export const REQUIRED_TEXT = (name: string) => `${name}は必須です。`;

/**
 * @param name
 * @param max
 * @returns
 */
export const MAX_LENGTH_TEXT = (name: string, max: number) =>
  `${name}は${max}文字以内で入力してください。`;

/**
 * @param name
 * @returns
 */
export const EMAIL_FORMAT_TEXT = (name: string) =>
  `${name}はメールアドレス形式で入力してください。`;
