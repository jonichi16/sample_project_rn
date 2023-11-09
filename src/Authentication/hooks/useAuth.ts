import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      const response = await AsyncStorage.getItem('isLoggedIn');
      const data = response !== null ? Boolean(response) : false;
      console.log(data);
      setIsLoggedIn(data);
    };

    fetchIsLoggedIn();
  }, [isLoggedIn]);

  return {isLoggedIn, setIsLoggedIn};
};

export default useAuth;
