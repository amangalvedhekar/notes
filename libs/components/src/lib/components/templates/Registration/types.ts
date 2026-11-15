import type { ReactNode } from 'react';

export type RegistrationProps = {
  heading: string | ReactNode;
  subheading: string | ReactNode;
};

export type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptedLegal: boolean;
};

export type FormTouched = {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  acceptedLegal: boolean;
};

export type FormUi = {
  isSubmitted: boolean;
  isSubmitting: boolean;
  serverError: string | null;
};
