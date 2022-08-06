import React, { useState } from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      w='100%'
      maxW='998px'
      justifyContent='space-between'
      p='1rem'
      height='min'
      position='absolute'
    >
      {/* mobile links */}
      <Flex
        position='fixed'
        color='white'
        bgColor='#29abe2'
        top='0'
        left='0'
        w='50vw'
        minW='200px'
        flexDir='column'
        p='6rem 2rem 1rem 2rem'
        zIndex='90'
        display={isOpen ? "flex" : "none"}
        fontSize='1.5rem'
        //
      >
        <Link pb='0.5rem' fontFamily='robotoRegular'>
          cadastro
        </Link>
        <Link pb='0.5rem' fontFamily='robotoRegular'>
          sobre mim
        </Link>
        <Link pb='0.5rem' fontFamily='robotoRegular'>lista</Link>
      </Flex>
      {/* hamburger btn */}
      <Link
        background='none'
        onClick={() => setIsOpen(!isOpen)}
        display={{ base: "block", sm: "none" }}
        zIndex='99'
      >
        <Image
          src={
            isOpen
              ? "./icones/hamburguer-aberto0.svg"
              : "./icones/hamburguer.svg"
          }
          w='30px'
        />
      </Link>
      <Box p='0.5rem'>
        <Image src='./logo-in8-dev.svg' w='100px' />
      </Box>
      {/* desktop links */}
      <Flex
        gap='2'
        p='0.5rem'
        color='white'
        display={{ base: "none", sm: "flex" }}
      >
        <Link fontFamily='robotoRegular'>cadastro</Link>
        <Link fontFamily='robotoRegular'>● lista</Link>
        <Link fontFamily='robotoRegular'>● sobre mim</Link>
      </Flex>
    </Flex>
  );
}
