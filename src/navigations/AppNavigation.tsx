import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from '../authentication/components';
import List from '../list/components';
import {AuthContext} from '../authentication/context/AuthProvider';
import {StyleSheet} from 'react-native';
import Button from '../common/components/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../common/components/Splash';
import Item from '../item/components';
import {Spacing} from '../common/styles';

export type RootStackParamList = {
  Auth: undefined;
  List: undefined;
  Item: {item: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const auth = useContext(AuthContext);

  const logoutButton = () => {
    const onPress = async () => {
      await AsyncStorage.removeItem('isLoggedIn');
      auth!.setIsLoggedIn(false);
    };

    return <Button title="Logout" style={styles.logout} onPress={onPress} />;
  };

  if (auth!.isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationTypeForReplace: 'pop',
          headerTitleAlign: 'center',
        }}>
        {auth!.isLoggedIn ? (
          <>
            <Stack.Screen
              name="List"
              component={List}
              options={{
                title: 'My List',
                headerLeft: () => logoutButton(),
              }}
            />
            <Stack.Screen
              name="Item"
              component={Item}
              options={{
                animation: 'slide_from_right',
              }}
            />
          </>
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

const styles = StyleSheet.create({
  logout: {
    width: 'auto',
    marginVertical: 10,
    paddingVertical: Spacing.spacing.xs,
    paddingHorizontal: Spacing.spacing.md,
  },
});
