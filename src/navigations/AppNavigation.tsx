import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from '../authentication/components';
import List from '../list/components';
import {AuthContext} from '../authentication/context/AuthProvider';
import {Text} from 'react-native';

export type RootStackParamList = {
  Auth: undefined;
  List: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const auth = useContext(AuthContext);

  if (auth!.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth!.isLoggedIn ? (
          <Stack.Screen
            name="List"
            component={List}
            options={{
              animationTypeForReplace: 'pop',
            }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={Authentication}
            options={{headerShown: false, animationTypeForReplace: 'pop'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
