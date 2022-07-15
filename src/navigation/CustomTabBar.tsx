import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../theme/colors';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import StereoImageIcon from '../components/StereoImageIcon/StereoImageIcon';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.ReactElement {
  const onPressCamera = useCallback(() => {
    navigation.navigate('CameraStack');
  }, [navigation]);
  return (
    <View style={styles.bottomBar}>
      <LinearGradient
        locations={[0, 0.64, 1]}
        colors={[Colors.transparent, Colors.transparent, Colors.neonPurpleT]}
        style={styles.linearGradient}
      />
      <View style={styles.wrapper}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // @ts-ignore
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const color = isFocused ? Colors.dark : Colors.white;
          const icon = index === 0 ? 'home' : 'settings';

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.iconWrapper}>
              <View style={styles.icon}>
                {isFocused ? (
                  <StereoImageIcon size={24} name={icon} />
                ) : (
                  <Icon name={icon} size={24} color={color} />
                )}
              </View>
              <Text style={isFocused ? styles.textActive : styles.text}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.middleIconWrapper}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={onPressCamera}
          onLongPress={onPressCamera}
          style={styles.cameraIconWrapper}>
          <LinearGradient
            colors={[Colors.neonBlue, Colors.neonPink]}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            style={styles.middleIcon}>
            <Icon name={'photo-camera'} size={24} color={Colors.white} />
            <Text style={styles.cameraText}>+ NFT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
