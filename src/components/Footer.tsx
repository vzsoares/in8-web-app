import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex
      alignItems='center'
      w='100%'
      backgroundImage={{
        base: "././imagens/rodape-mobile.jpg",
        md: "./imagens/rodape-desktop.jpg",
      }}
      minH={{ base: "35vh", md: "20vh" }}
      backgroundPosition='center'
      backgroundSize='cover'
      flexDir='column'
      justifyContent='center'
      p='0.5rem'
    >
      <Box color='white' textAlign='center'>
        <Text py='0.5rem'>Vinicius Zenha De Oliveira Soares</Text>
        <Text pb='0.5rem'>vinicius.zenha@gmail.com</Text>
        <Text>(31)9 92037581</Text>
        <Text py='0.5rem'>Teste i8n</Text>
      </Box>
    </Flex>
  );
}
