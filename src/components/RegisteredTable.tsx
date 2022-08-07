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

  const infoStyles = { color: "#808080", fontFamily: "HelveticaCondensed" };
  const tableTitleStyles = { fontFamily: "robotoRegular" };
  const tableNumberStyles = {
    fontFamily: "RobotoLight",
    fontWeight: "300",
    color: "#012d51",
  };

  return (
    <Box>
      <Heading
        mb='2rem'
        textAlign='center'
        color='#29abe2'
        fontFamily='HelveticaUltraLt'
        fontWeight='200'
        fontSize='3rem'
      >
        Lista de Cadastro
      </Heading>
      <Skeleton isLoaded={users ? users.length > 0 : false} minH='10vh'>
        {/* mobile screen Tabs */}
        <Tabs
          variant='enclosed-colored'
          colorScheme='blue'
          border='1px solid #29abe2'
          display={{ base: "block", md: "none" }}
        >
          <TabList>
            {users?.map((_, i) => (
              <Tab key={i} sx={tableNumberStyles}>
                {i + 1}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {users?.map(
              ({ name, email, birth, number }: User, index: number) => {
                return (
                  <TabPanel key={index}>
                    <Flex flexDir='column' gap='5'>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' sx={tableTitleStyles}>
                          Nome
                        </Text>
                        <Text sx={infoStyles}>{name}</Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' sx={tableTitleStyles}>
                          Email
                        </Text>
                        <Text sx={infoStyles}>{email}</Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' sx={tableTitleStyles}>
                          Nasc.
                        </Text>
                        <Text sx={infoStyles}>{birth}</Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' sx={tableTitleStyles}>
                          Tel
                        </Text>
                        <Text sx={infoStyles}>{number}</Text>
                      </Flex>
                    </Flex>
                  </TabPanel>
                );
              }
            )}
          </TabPanels>
        </Tabs>
        {/* bigger screens Table */}
        <TableContainer>
          <Table
            variant='simple'
            colorScheme='teal'
            display={{ base: "none", md: "table" }}
          >
            <Thead>
              <Tr color='#012d51'>
                <Th borderRight='1px solid #B2F5EA'> </Th>
                <Th sx={tableTitleStyles} borderRight='1px solid #B2F5EA'>
                  Nome
                </Th>
                <Th sx={tableTitleStyles} borderRight='1px solid #B2F5EA'>
                  Email
                </Th>
                <Th sx={tableTitleStyles} borderRight='1px solid #B2F5EA'>
                  Nascimento
                </Th>
                <Th sx={tableTitleStyles}>Telefone</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users?.map(
                ({ name, email, birth, number }: User, index: number) => {
                  const borderBottom =
                    users.length === index + 1 ? "none" : "1px solid #B2F5EA";
                  return (
                    <Tr key={index}>
                      <Td
                        sx={tableNumberStyles}
                        borderRight='1px solid #B2F5EA'
                        borderBottom={borderBottom}
                      >
                        {index + 1}
                      </Td>
                      <Td
                        sx={infoStyles}
                        borderRight='1px solid #B2F5EA'
                        borderBottom={borderBottom}
                      >
                        {name}
                      </Td>
                      <Td
                        sx={infoStyles}
                        borderRight='1px solid #B2F5EA'
                        borderBottom={borderBottom}
                      >
                        {email}
                      </Td>
                      <Td
                        sx={infoStyles}
                        borderRight='1px solid #B2F5EA'
                        borderBottom={borderBottom}
                      >
                        {birth}
                      </Td>
                      <Td sx={infoStyles} borderBottom={borderBottom}>
                        {number}
                      </Td>
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
