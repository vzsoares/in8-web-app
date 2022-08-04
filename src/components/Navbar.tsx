import { Box, Center, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Flex
      w='100%'
      maxW='998px'
      justifyContent='space-between'
      p='1rem'
      height='min'
    >
      <Box p='0.5rem'>
        <Image src='./logo-in8-dev.svg' w='100px' />
      </Box>
      <Flex gap='2' p='0.5rem' color='white'>
        <Link>cadastro</Link>
        <Link>● lista ●</Link>
        <Link>sobre mim</Link>
      </Flex>
    </Flex>
  );
}
