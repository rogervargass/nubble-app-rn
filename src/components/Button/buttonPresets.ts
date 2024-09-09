import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
};