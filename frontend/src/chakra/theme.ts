import { background, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#3d8497",
      },
    },
    styles: {
      global: () => {
        body: {
          bg: "whiteAlpha.200";
        }
      },
    },
  }
);
