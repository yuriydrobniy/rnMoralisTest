import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';

export type CameraStackParams = {
  Camera: undefined;
  Forms: undefined;
};

export type RootStackParams = {
  Auth: undefined;
  Main: undefined;
  CameraStack: undefined;
};

export type AuthStackParams = {
  LogIn: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  Camera: undefined;
};

export type SettingsStackParams = {
  Settings: undefined;
  Details: undefined;
};

export type TabParams = {
  Home: undefined;
  Settings: undefined;
};

// todo - not sure if RootStackParams is needed here (because of CameraStack)
export type HomeNavigationProps = NativeStackScreenProps<
  HomeStackParams & RootStackParams,
  'Home'
>;

export type CameraNavigationProps = NativeStackScreenProps<
  HomeStackParams,
  'Camera'
>;

const RootStack = createNativeStackNavigator<RootStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const SettingsStack = createNativeStackNavigator<SettingsStackParams>();
const CameraStack = createNativeStackNavigator<CameraStackParams>();
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
    <HomeStack.Navigator
      screenOptions={{headerTitleAlign: 'center', animation: 'none'}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/*<HomeStack.Screen options={{}} name="Camera" component={CameraScreen} />*/}
    </HomeStack.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator screenOptions={{headerShown: false}}>
      <CameraStack.Screen name="Camera" component={CameraScreen} />
      <CameraStack.Screen name="Forms" component={CameraScreen} />
    </CameraStack.Navigator>
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
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator({auth = false}) {
  console.log('AUTH', auth);
  return (
    <NavigationContainer>
      {auth ? (
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="CameraStack"
            component={CameraStackScreen}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator>
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              headerShown: false,
              // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}
