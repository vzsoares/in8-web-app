import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Skeleton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import { User } from "../models/User";

export default function RegisteredList() {
  const { users } = useUsers();

  return (
    <Box>
      <Heading
        mb='2rem'
        textAlign='center'
        color='#29abe2'
        fontFamily='HelveticaUltraLt'
        fontWeight='thin'
      >
        Lista de Cadastro
      </Heading>
      <Skeleton isLoaded={users ? users.length > 0 : false} minH='10vh'>
        {/*  */}
        <Tabs
          variant='enclosed-colored'
          colorScheme='blue'
          border='1px solid #29abe2'
          display={{ base: "block", md: "none" }}
        >
          <TabList>
            {users?.map((_, i) => (
              <Tab key={i}>{i + 1}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {users?.map(
              ({ name, email, birth, number }: User, index: number) => {
                return (
                  <TabPanel key={index}>
                    <Flex flexDir='column' gap='5'>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px'>Nome</Text>
                        <Text color='#808080'>{name}</Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px'>Email</Text>
                        <Text color='#808080'>{email}</Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px'>Nasc.</Text>
                        <Text color='#808080'>{birth}</Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px'>tel</Text>
                        <Text color='#808080'>{number}</Text>
                      </Flex>
                    </Flex>
                  </TabPanel>
                );
              }
            )}
          </TabPanels>
        </Tabs>
        {/*  */}
        <TableContainer>
          <Table
            variant='simple'
            colorScheme='teal'
            display={{ base: "none", md: "table" }}
          >
            <Thead>
              <Tr color='#012d51'>
                <Th> </Th>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>Nascimento</Th>
                <Th>Telefone</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users?.map(
                ({ name, email, birth, number }: User, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td color='#012d51'>{index + 1}</Td>
                      <Td color='#808080'>{name}</Td>
                      <Td color='#808080'>{email}</Td>
                      <Td color='#808080'>{birth}</Td>
                      <Td color='#808080'>{number}</Td>
                    </Tr>
                  );
                }
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Skeleton>
    </Box>
  );
}
