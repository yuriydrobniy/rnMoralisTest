import { PixelRatio, Platform } from 'react-native'

const fontScale = PixelRatio.getFontScale()
const osScale = 1

const type = {
  base: 'System',
  regular: (Platform.OS === 'ios') ? 'SanFranciscoText' : 'Roboto',
  light: (Platform.OS === 'ios') ? 'SanFranciscoText-Light' : 'Roboto-Light',
}

const size = {
  font8: Math.floor(osScale * (8 / fontScale)),
  font9: Math.floor(osScale * (9 / fontScale)),
  font10: Math.floor(osScale * (10 / fontScale)),
  font11: Math.floor(osScale * (11 / fontScale)),
  font12: Math.floor(osScale * (12 / fontScale)),
  font13: Math.floor(osScale * (13 / fontScale)),
  font14: Math.floor(osScale * (14 / fontScale)),
  font15: Math.floor(osScale * (15 / fontScale)),
  font16: Math.floor(osScale * (16 / fontScale)),
  font17: Math.floor(osScale * (17 / fontScale)),
  font18: Math.floor(osScale * (18 / fontScale)),
  font20: Math.floor(osScale * (20 / fontScale)),
  font21: Math.floor(osScale * (21 / fontScale)),
  font22: Math.floor(osScale * (22 / fontScale)),
  font23: Math.floor(osScale * (23 / fontScale)),
  font24: Math.floor(osScale * (24 / fontScale)),
  font25: Math.floor(osScale * (25 / fontScale)),
  font26: Math.floor(osScale * (26 / fontScale)),
  font30: Math.floor(osScale * (30 / fontScale)),
  font32: Math.floor(osScale * (32 / fontScale)),
  font34: Math.floor(osScale * (34 / fontScale)),
  font40: Math.floor(osScale * (40 / fontScale)),
  font48: Math.floor(osScale * (48 / fontScale)),
}

export default { type, size }
