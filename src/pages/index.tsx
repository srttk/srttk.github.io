import React from "react";
import {
  Box,
  Heading,
  VStack,
  useColorModeValue,
  Text,
  Button,
  Flex,
  Avatar,
  Badge,
  Tag,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import Layout from "~/components/Layout";
import { LinkButton } from "~/components/Link";
export default function HomePage() {
  return (
    <Layout>
      <VStack
        maxW="xs"
        minH="sm"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", "gray.700")}
        mt={20}
        rounded="xl"
        py={4}
        px={4}
        pt={10}
        fontFamily="mono"
        position="relative"
        // shadow="xl"
      >
        <Avatar
          position="absolute"
          top={-30}
          name="Sarath TK"
          src="https://avatars.githubusercontent.com/u/4659838?v=4"
          size="lg"
        />
        <Heading size="md" fontFamily="mono">
          Sarath TK
        </Heading>
        <Text fontSize="sm" fontWeight="medium">
          Fullstack Developer, Building polished software and web experiences.
          Crafting interfaces.
        </Text>

        <VStack w="full" p={4} spacing={5}>
          <LinkButton
            w="full"
            size="sm"
            rounded="full"
            bg={useColorModeValue("gray.800", "blackAlpha.400")}
            color={useColorModeValue("white", "gray.200")}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.600"),
            }}
            leftIcon={<FaGithub />}
            href={`https://github.com/saratonite`}
            isExternal
          >
            Github
          </LinkButton>
          <LinkButton
            w="full"
            size="sm"
            rounded="full"
            bg={useColorModeValue("gray.800", "blackAlpha.400")}
            color={useColorModeValue("white", "gray.200")}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.600"),
            }}
            leftIcon={<RiProfileLine />}
            href={`https://saratonite.github.io/resume`}
            isExternal
          >
            Resume
          </LinkButton>
          <LinkButton
            w="full"
            size="sm"
            rounded="full"
            bg={useColorModeValue("gray.800", "blackAlpha.400")}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.600"),
            }}
            color={useColorModeValue("white", "gray.200")}
            // variant="outline"
            leftIcon={<FaEnvelope />}
            href={`#click`}
            isExternal
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:sarath.tk@icloud.com`;
            }}
          >
            Mail
          </LinkButton>
        </VStack>

        <Flex wrap="wrap" gap={2} justifyContent="center">
          <Tag colorScheme="yellow" py={1} size="sm">
            Javascript
          </Tag>
          <Tag colorScheme="twitter" py={1} size="sm">
            Typescript
          </Tag>
          <Tag colorScheme="whatsapp" py={1} size="sm">
            Node.JS
          </Tag>
          <Tag colorScheme="twitter" py={1} size="sm">
            React.js
          </Tag>
          <Tag colorScheme="gray" py={1} size="sm">
            Next.js
          </Tag>
          <Tag colorScheme="pink" py={1} size="sm">
            GraphQL
          </Tag>
          <Tag colorScheme="blue" py={1} size="sm">
            Postgresql
          </Tag>
          <Tag colorScheme="cyan" py={1} size="sm">
            Tailwind.css
          </Tag>

          <Tag colorScheme="red" py={1} size="sm">
            Angular
          </Tag>
          <Tag colorScheme="gray" py={1} size="sm">
            Remix
          </Tag>
          <Tag colorScheme="teal" py={1} size="sm">
            Prisma
          </Tag>
        </Flex>
      </VStack>
    </Layout>
  );
}
