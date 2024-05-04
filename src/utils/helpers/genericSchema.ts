import { z } from 'zod';
import {
  MAX_LENGTH_TEXT,
  REQUIRED_TEXT,
} from '../constants/validationMessages';

/**
 * @param name
 * @returns
 */
export const requiredStringSchema = (name: string) => {
  return z.string().trim().min(1, REQUIRED_TEXT(name));
};

/**
 * @param name
 * @returns
 */
export const requiredNumberSchema = (name: string) => {
  return z.number().min(1, REQUIRED_TEXT(name));
};

/**
 * @param name
 * @param max
 * @returns
 */
export const maxStringSchema = (name: string, max: number) => {
  return requiredStringSchema(name).max(max, MAX_LENGTH_TEXT(name, max));
};

/**
 * @param name
 * @param max
 * @returns
 */
export const maxNumberSchema = (name: string, max: number) => {
  return requiredStringSchema(name).max(max, MAX_LENGTH_TEXT(name, max));
};
