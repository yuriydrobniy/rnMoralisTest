import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// components
import CustomTabBar from './CustomTabBar';

// screens
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import PreviewScreen from '../screens/PreviewScreen/PreviewScreen';
import FormsScreen from '../screens/FormsScreen/FormsScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

export type CameraStackParams = {
  Camera: undefined;
  Preview: {path: string; type: 'video' | 'photo'};
  Forms: {contentUri: string};
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
  CameraStackParams,
  'Camera'
>;

export type PreviewNavigationProps = NativeStackScreenProps<
  CameraStackParams,
  'Preview'
>;

// HomeStackParams - to fix type for navigation.navigate('Home') from FormsScreen
export type FormsNavigationProps = NativeStackScreenProps<
  CameraStackParams & HomeStackParams,
  'Forms'
>;

const RootStack = createNativeStackNavigator<RootStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const SettingsStack = createNativeStackNavigator<SettingsStackParams>();
const CameraStack = createNativeStackNavigator<CameraStackParams>();
const Tab = createBottomTabNavigator<TabParams>();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LogIn" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        animation: 'none',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/*<HomeStack.Screen options={{}} name="Camera" component={CameraScreen} />*/}
    </HomeStack.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator screenOptions={{headerShown: false}}>
      <CameraStack.Screen name="Camera" component={CameraScreen} />
      <CameraStack.Screen name="Preview" component={PreviewScreen} />
      <CameraStack.Screen name="Forms" component={FormsScreen} />
    </CameraStack.Navigator>
  );
}

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
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
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
