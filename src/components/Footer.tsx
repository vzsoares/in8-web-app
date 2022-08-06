import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex
      alignItems='center'
      w='100%'
      backgroundImage={{
        base: "././imagens/rodape-mobile.jpg",
        sm: "./imagens/rodape-desktop.jpg",
      }}
      minH={{ base: "45vh", sm: "20vh" }}
      backgroundPosition='center'
      backgroundSize='cover'
      flexDir='column'
      justifyContent='center'
      p='2rem'
    >
      <Box color='white' textAlign='center'>
        <Text py='0.5rem' fontFamily='RobotoLight' fontWeight='300'>
          Vinicius Zenha De Oliveira Soares
        </Text>
        <Text pb='0.5rem' fontFamily='RobotoLight' fontWeight='300'>
          vinicius.zenha@gmail.com
        </Text>
        <Text fontFamily='RobotoLight' fontWeight='300'>
          (31)9 9203-7581
        </Text>
        <Text py='0.5rem' fontFamily='RobotoLight' fontWeight='300'>
          Teste i8n
        </Text>
      </Box>
    </Flex>
  );
}
