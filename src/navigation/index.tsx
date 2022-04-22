import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export type RootStackParams = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParams = {
  LogIn: undefined;
};

export type HomeStackParams = {
  Home: undefined;
};

export type SettingsStackParams = {
  Settings: undefined;
  Details: undefined;
};

export type TabParams = {
  Home: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const SettingsStack = createNativeStackNavigator<SettingsStackParams>();
const Tab = createBottomTabNavigator<TabParams>();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LogIn" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsScreen = () => <></>;
const DetailsScreen = () => <></>;

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator({auth = false}) {
  console.log('AUTH', auth);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {auth ? (
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              headerShown: false,
              // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
