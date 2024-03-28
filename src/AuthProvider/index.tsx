import React, {createContext, useEffect, useState} from 'react';
import {getDataFromStorage} from '../utils/storage';

// Define the type for the authentication context value
type AuthContextType = {
  isLogin: boolean;
  setLogin: () => void; // Corrected type annotation for setLogin function
  error: boolean;
  getUserData: () => void;
};

// Create the context with the defined type
export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  setLogin: () => {}, // Dummy function
  error: false,
  getUserData: () => {},
});

// Create the provider component with children prop
export const AuthProvider = ({children}: any) => {
  // State to track the authentication status
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(false);

  // Function to handle login
  const setLogin = () => {
    setIsLogin(true);
  };

  async function getUserData() {
    await getDataFromStorage('user')
      .then(data => {
        if (data) {
          setIsLogin(true);
        }
      })
      .catch((err: any) => {
        setError(true);
      });
  }

  const authContextValue: AuthContextType = {
    isLogin,
    setLogin,
    error,
    getUserData,
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
