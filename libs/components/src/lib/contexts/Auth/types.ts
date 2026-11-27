import { ReactNode } from 'react';
import {
  ConfirmSignUpInput,
  ConfirmSignUpOutput,
  SignInOutput,
  SignUpInput,
  SignUpOutput,
} from 'aws-amplify/auth';

export type AuthContextType = {
  children: ReactNode;
};

export type CreateUserProps = SignUpInput;

export type ConfirmUserProps = ConfirmSignUpInput;

export interface AuthProviderProps {
  register: (args: CreateUserProps) => Promise<SignUpOutput>;
  confirmUser: (args: ConfirmUserProps) => Promise<ConfirmSignUpOutput>;
  completeAutoSignIn: () => Promise<SignInOutput>;
  isAuthLoading: boolean;
  isSignedIn: boolean;
  username: string | null;
  // logIn: (args: SignInInput) => Promise<void>;
  // logout: () => Promise<void>;
  // ab: AuthUser | null | undefined;
  // passwordResetRequest: (args: ResetPasswordInput) => Promise<void>;
  // passwordResetConfirmation: (args: ConfirmResetPasswordInput) => Promise<void>;
}
