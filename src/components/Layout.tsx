import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

export type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      style={{
        minHeight: "100vh",
      }}
      direction="column"
      bg={useColorModeValue("gray.100", "blackAlpha.50")}
    >
      <Head>
        <title>Sarath TK : Fullstack developer</title>
      </Head>
      <Box as="main" flexGrow={1}>
        {children}
      </Box>
      <Box maxW="xs" mx="auto" fontSize="xs" p="2">
        <Text>&copy; 2022 Sarath</Text>
      </Box>
    </Flex>
  );
}
