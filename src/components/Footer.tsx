import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  const textStyle = { fontFamily: "RobotoLight", fontWeight: "300" };
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
        <Text py='0.5rem' sx={textStyle}>
          Vinicius Zenha De Oliveira Soares
        </Text>
        <Text pb='0.5rem' sx={textStyle}>
          vinicius.zenha@gmail.com
        </Text>
        <Text sx={textStyle}>(31)9 9203-7581</Text>
        <Text py='0.5rem' sx={textStyle}>
          Teste i8n
        </Text>
      </Box>
    </Flex>
  );
}
