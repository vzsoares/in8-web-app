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
        backgroundImage={{
          base: "./imagens/index-image-mobile.jpg",
          md: "./imagens/index-image.jpg",
        }}
        minH={{ base: "100vh", md: "60vh" }}
        backgroundPosition='center'
        backgroundSize='cover'
        flexDir='column'
        position='relative'
      >
        <Navbar />
        <Box
          color='white'
          w='100%'
          maxW='998px'
          px={{ base: "2rem", md: "3.5rem" }}
          textAlign={{ base: "center", sm: "start" }}
          position='absolute'
          top='40%'
        >
          <Heading
            fontSize='5rem'
            letterSpacing='widest'
            fontFamily='HelveticaUltraLt'
            fontWeight='200'
          >
            Estagio
          </Heading>
          <Heading
            fontSize='2.5rem'
            fontFamily='HelveticaUltraLt'
            fontWeight='200'
          >
            Prova de seleção
          </Heading>
        </Box>
      </Flex>
      <Flex w='100%' bgColor='#29abe2' justifyContent='center' p='2rem'>
        <Box w='100%' maxW='998px'>
          <Form />
        </Box>
      </Flex>
      <Flex w='100%' justifyContent='center' p='2rem'>
        <Box w='100%' maxW='998px'>
          <RegisteredList />
        </Box>
      </Flex>
      <Flex w='100%' justifyContent='center'>
        <Footer />
      </Flex>
    </Flex>
  );
}

export default App;
