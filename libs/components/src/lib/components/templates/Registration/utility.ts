import type { LiveValidationItem } from '../LiveValidation';
import type { FormTouched, FormUi, FormValues } from './types';
import { registrationIds } from '@notes/test-ids';

const emailRegex = /\S+@\S+\.\S+/;

const passwordRules = {
  hasMinLength: (password: string) => password.length >= 8,
  hasUppercase: (password: string) => /[A-Z]/.test(password),
  hasLowercase: (password: string) => /[a-z]/.test(password),
  hasSpecialCharacter: (password: string) => /[^A-Za-z0-9]/.test(password),
  hasDigit: (password: string) => /\d/.test(password),
};

export const initialValues: FormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  acceptedLegal: false,
};

export const initialTouched: FormTouched = {
  email: false,
  password: false,
  confirmPassword: false,
  acceptedLegal: false,
};

export const initialUi: FormUi = {
  isSubmitted: false,
  isSubmitting: false,
  serverError: null,
};

export const getPasswordChecks = (password: string) => ({
  hasMinLength: passwordRules.hasMinLength(password),
  hasUppercase: passwordRules.hasUppercase(password),
  hasLowercase: passwordRules.hasLowercase(password),
  hasSpecialCharacter: passwordRules.hasSpecialCharacter(password),
  hasDigit: passwordRules.hasDigit(password),
});

export const getPasswordValidationItems = (
  passwordChecks: ReturnType<typeof getPasswordChecks>,
): LiveValidationItem[] => [
  {
    key: 'min-length',
    testID: registrationIds.passwordRules.minLength,
    message: 'Must be at least 8 characters long',
    isValid: passwordChecks.hasMinLength,
  },
  {
    key: 'uppercase',
    testID: registrationIds.passwordRules.uppercase,
    message: 'Must contain one uppercase letter',
    isValid: passwordChecks.hasUppercase,
  },
  {
    key: 'lowercase',
    testID: registrationIds.passwordRules.lowercase,
    message: 'Must contain one lowercase letter',
    isValid: passwordChecks.hasLowercase,
  },
  {
    key: 'special',
    testID: registrationIds.passwordRules.special,
    message: 'Must contain one special character',
    isValid: passwordChecks.hasSpecialCharacter,
  },
  {
    key: 'digit',
    testID: registrationIds.passwordRules.digit,
    message: 'Must contain one digit',
    isValid: passwordChecks.hasDigit,
  },
];

export const getErrors = (
  values: FormValues,
  isPasswordValid: boolean,
) => ({
  email: emailRegex.test(values.email) ? null : 'Enter a valid email address',
  password:
    isPasswordValid
      ? null
      : 'Password must be at least 8 characters and include uppercase, lowercase, special character, and digit',
  confirmPassword:
    values.confirmPassword === values.password
      ? null
      : 'Confirm password must match password',
  acceptedLegal: values.acceptedLegal
    ? null
    : 'You must accept Terms & Conditions and Privacy Policy',
});
