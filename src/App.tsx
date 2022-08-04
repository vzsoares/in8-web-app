import React from "react";
import Profiler from "./components/Profiler";
import Form from "./components/Form";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import RegisteredList from "./components/RegisteredList";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex w='100%' flexDir='column' minH='100vh' alignItems='center' id='home'>
      <Link href='#home' zIndex='99'>
        <Image
          src='./icones/topo-pag.svg'
          w='40px'
          position='fixed'
          bottom='5%'
          left='90%'
        />
      </Link>
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
