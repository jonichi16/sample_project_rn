import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

type AuthContextType = {
  isLoading: boolean;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: React.ReactNode;
};
const AuthProvider = ({children}: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      try {
        const response = await AsyncStorage.getItem('isLoggedIn');
        const data = response !== null ? Boolean(response) : false;

        setIsLoggedIn(data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2800);
      }
    };

    fetchIsLoggedIn();
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{isLoading, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
