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
      <Heading mb='2rem' textAlign='center' color='#29abe2'>
        Lista de Cadastro
      </Heading>
      <TableContainer>
        <Skeleton isLoaded={users ? users.length > 0 : false}>
          {/*  */}
          <Tabs
            variant='enclosed-colored'
            colorScheme='blue'
            border='1px solid #29abe2'
            display={{ base: "block", md: "none" }}
          >
            <TabList>
              {users?.map((_, i) => (
                <Tab>{i + 1}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {users?.map(({ name, email, birth, number }: User) => {
                return (
                  <TabPanel>
                    <Flex flexDir='column' gap='5'>
                      <Text borderBottom='1px solid #29abe2'>
                        Nome <span style={{ color: "#808080" }}>{name}</span>
                      </Text>
                      <Text borderBottom='1px solid #29abe2'>
                        Email <span style={{ color: "#808080" }}>{email}</span>
                      </Text>
                      <Text borderBottom='1px solid #29abe2' color='#012d51'>
                        Nasc. <span style={{ color: "#808080" }}>{birth}</span>
                      </Text>
                      <Text borderBottom='1px solid #29abe2'>
                        Tel <span style={{ color: "#808080" }}>{number}</span>
                      </Text>
                    </Flex>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
          {/*  */}
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
        </Skeleton>
      </TableContainer>
    </Box>
  );
}
