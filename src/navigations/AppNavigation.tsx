import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from '../authentication/components';
import List from '../list/components';

export type RootStackParamList = {
  Auth: undefined;
  List: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Authentication}
          options={{headerShown: false, animationTypeForReplace: 'pop'}}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            animation: 'fade_from_bottom',
            animationTypeForReplace: 'pop',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
