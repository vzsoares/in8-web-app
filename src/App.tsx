import React from "react";
import Profiler from "./components/Profiler";
import Form from "./components/Form";
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Flex w='100vw' flexDir='column' minH='100vh' alignItems='center'>
      <Flex
        alignItems='center'
        w='100%'
        backgroundImage='./imagens/index-image.jpg'
        h='40vh'
        backgroundPosition='center'
        backgroundSize='cover'
        flexDir='column'
      >
        <Navbar />
        <Box color='white' w='100%' maxW='998px' pt='5rem' px='1rem'>
          <Heading>Estagio</Heading>
          <Heading as='h3'>Prova seleção</Heading>
        </Box>
      </Flex>
      {/* <Profiler /> */}
      <Flex w='100%' bgColor='#29abe2' justifyContent='center' p='2rem'>
        <Box w='100%' maxW='998px'>
          <Form />
        </Box>
      </Flex>
      <Flex w='100%' justifyContent='center' p='2rem'>
        <Box w='100%' maxW='998px'>
          <Form />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
