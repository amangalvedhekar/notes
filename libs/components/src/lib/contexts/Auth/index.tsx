import { createContext } from 'react';
import {
  AuthContextType,
  AuthProviderProps,
  ConfirmUserProps,
  CreateUserProps,
} from './types';
import { signUp, confirmSignUp } from 'aws-amplify/auth';

const AuthContext = createContext<AuthProviderProps | null>(null);

const AuthProvider = ({ children }: AuthContextType) => {

  const register = async ({ username, password }: CreateUserProps) => {
    try {
      await signUp({ username, password });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const confirmUser = async ({
    username,
    confirmationCode,
  }: ConfirmUserProps) => {
    try {
      await confirmSignUp({ username, confirmationCode });
    }catch (e) {
      console.error(e);
      throw e;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        confirmUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
