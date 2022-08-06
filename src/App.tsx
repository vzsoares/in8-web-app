// TODO https://docs.google.com/forms/d/e/1FAIpQLSeL8L8Kamkz0D5ZEcabdIj8ygJoruAl8FlDaX8bX1pApyC9lQ/viewform
import React from "react";
import Form from "./components/Form";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import RegisteredList from "./components/RegisteredTable";
import Footer from "./components/Footer";
import ToTopBtn from "./components/ToTopBtn";
function App() {
  return (
    <Flex w='100%' flexDir='column' minH='100vh' alignItems='center' id='home'>
      <ToTopBtn />
      <Flex
        alignItems='center'
        w='100%'
        backgroundImage='./imagens/index-image.jpg'
        h='40vh'
        backgroundPosition='center'
        backgroundSize='cover'
        flexDir='column'
      >
        {/* TODO hamburger navbar */}
        <Navbar />
        <Box color='white' w='100%' maxW='998px' pt='5rem' px='1rem'>
          <Heading>Estagio</Heading>
          <Heading as='h3'>Prova seleção</Heading>
        </Box>
      </Flex>
      <Flex w='100%' bgColor='#29abe2' justifyContent='center' p='2rem'>
        <Box w='100%' maxW='998px'>
          <Form />
        </Box>
      </Flex>
      <Flex w='100%' justifyContent='center' p='2rem'>
        <Box w='100%' maxW='998px'>
          {/* TODO tabs */}
          <RegisteredList />
        </Box>
      </Flex>
      {/* TODO change img's sizes */}
      <Flex w='100%' justifyContent='center'>
        <Footer />
      </Flex>
    </Flex>
  );
}

export default App;
