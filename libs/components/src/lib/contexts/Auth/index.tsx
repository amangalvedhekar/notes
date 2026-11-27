import { createContext, useEffect, useState } from 'react';
import {
  AuthContextType,
  AuthProviderProps,
  ConfirmUserProps,
  CreateUserProps,
} from './types';
import {
  autoSignIn,
  confirmSignUp,
  getCurrentUser,
  signUp,
} from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';

const AuthContext = createContext<AuthProviderProps | null>(null);

const AuthProvider = ({ children }: AuthContextType) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getCurrentUser()
      .then((user) => {
        if (isMounted) {
          setUsername(user.username);
          setIsSignedIn(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setUsername(null);
          setIsSignedIn(false);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsAuthLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const register = async ({ username, password }: CreateUserProps) => {
    try {
      return await signUp({
        username,
        password,
        options: {
          autoSignIn: { authFlowType: 'USER_PASSWORD_AUTH' },
          userAttributes: { email: username },
        },
      });
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
      return await confirmSignUp({ username, confirmationCode });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const completeAutoSignIn = async () => {
    try {
      const result = await autoSignIn();

      if (result.isSignedIn) {
        const user = await getCurrentUser();
        setUsername(user.username);
        setIsSignedIn(true);
      } else {
        setUsername(null);
        setIsSignedIn(false);
      }

      return result;
    } catch (e) {
      setUsername(null);
      setIsSignedIn(false);
      console.error(e);
      throw e;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        confirmUser,
        completeAutoSignIn,
        isAuthLoading,
        isSignedIn,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, Amplify };
