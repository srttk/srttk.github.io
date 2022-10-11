import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      "::selection": {
        color: props.colorMode === "dark" ? "teal.300" : "teal.400",
      },
      "::-moz-selection": {
        color: props.colorMode === "dark" ? "teal.300" : "teal.400",
      },
    }),
  },
});
