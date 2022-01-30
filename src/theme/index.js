import { extendTheme } from "@chakra-ui/react";
import { colors } from './colors';
import { fonts } from './fonts';
import { shadows } from './shadows';
import { sizes } from './sizes';

export const theme = extendTheme({
  colors,
  shadows,
  sizes,
  space: sizes,
  ...fonts,
});