import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
const manager = createLocalStorageManager("srt-clolor-mode");
import { theme } from "~/config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider colorModeManager={manager} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
