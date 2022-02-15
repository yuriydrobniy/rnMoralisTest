import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { WalletService } from "../types";

// eslint-disable-next-line functional/no-mixed-type
export type WalletServiceIconProps = {
  readonly width: number;
  readonly height: number;
  readonly walletService: WalletService;
  readonly connectToWalletService: (walletService: WalletService) => unknown;
  readonly size?: "sm" | "md" | "lg";
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  fullWidth: { width: "100%" },
  icon: { borderRadius: 15 },
  noOverflow: { overflow: "hidden" },
  title: {
    color: "grey",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  padding: { padding: 5 },
});

export default function WalletServiceIcon({
  width,
  height,
  walletService,
  connectToWalletService,
  size = "md",
}: WalletServiceIconProps): JSX.Element {
  const logoUri = React.useMemo(
    () =>
      `https://registry.walletconnect.org/logo/${size}/${walletService.id}.jpeg`,
    [walletService, size]
  );
  const onPress = React.useCallback(
    () => {console.log('walletService click', walletService); return connectToWalletService(walletService)},
    [connectToWalletService, walletService]
  );
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[{ width, height }, styles.container, styles.padding]}>
        <Image
          style={[
            styles.icon,
            {
              width: height * 0.6,
              height: height * 0.6,
            },
          ]}
          source={{ logoUri }}
        />
        <Text
          style={[styles.title, styles.fullWidth]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {walletService.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
