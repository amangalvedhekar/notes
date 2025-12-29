import { ReactNode } from 'react';
import {
  ConfirmSignUpInput,
  SignUpInput,
} from 'aws-amplify/auth';

export type AuthContextType = {
  children: ReactNode;
};

export type CreateUserProps = SignUpInput;

export type ConfirmUserProps = ConfirmSignUpInput;

export interface AuthProviderProps {
  register: (args: CreateUserProps) => Promise<void>;
  confirmUser: (args: ConfirmUserProps) => Promise<void>;
  // logIn: (args: SignInInput) => Promise<void>;
  // logout: () => Promise<void>;
  // ab: AuthUser | null | undefined;
  // passwordResetRequest: (args: ResetPasswordInput) => Promise<void>;
  // passwordResetConfirmation: (args: ConfirmResetPasswordInput) => Promise<void>;
}
