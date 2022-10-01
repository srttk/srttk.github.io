import React from "react";
import { ButtonProps, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export interface LinkButtonProps extends Omit<ButtonProps, "as"> {
  children: React.ReactNode;
  isExternal?: boolean;
  passHref?: boolean;
  href: string;
  as?: string;
}

export function LinkButton({
  children,
  as,
  href,
  isExternal = false,
  ...rest
}: LinkButtonProps) {
  return (
    <NextLink as={as} href={href} passHref>
      <Link
        display="inline-block"
        w={rest.w}
        _hover={undefined}
        style={{ textDecoration: "none" }}
        isExternal={isExternal}
      >
        <Button {...rest}>{children}</Button>
      </Link>
    </NextLink>
  );
}
