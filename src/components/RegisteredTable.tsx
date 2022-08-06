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
        fontWeight='200'
        fontSize='3rem'
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
              <Tab key={i} fontFamily='RobotoLight' fontWeight='300'>
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
                        <Text w='60px' fontFamily='robotoRegular'>
                          Nome
                        </Text>
                        <Text color='#808080' fontFamily='HelveticaCondensed'>
                          {name}
                        </Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' fontFamily='robotoRegular'>
                          Email
                        </Text>
                        <Text color='#808080' fontFamily='HelveticaCondensed'>
                          {email}
                        </Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' fontFamily='robotoRegular'>
                          Nasc.
                        </Text>
                        <Text color='#808080' fontFamily='HelveticaCondensed'>
                          {birth}
                        </Text>
                      </Flex>
                      <Flex borderBottom='1px solid #29abe2'>
                        <Text w='60px' fontFamily='robotoRegular'>
                          Tel
                        </Text>
                        <Text color='#808080' fontFamily='HelveticaCondensed'>
                          {number}
                        </Text>
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
                <Th borderRight='1px solid #B2F5EA'> </Th>
                <Th fontFamily='robotoRegular' borderRight='1px solid #B2F5EA'>
                  Nome
                </Th>
                <Th fontFamily='robotoRegular' borderRight='1px solid #B2F5EA'>
                  Email
                </Th>
                <Th fontFamily='robotoRegular' borderRight='1px solid #B2F5EA'>
                  Nascimento
                </Th>
                <Th fontFamily='robotoRegular'>Telefone</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users?.map(
                ({ name, email, birth, number }: User, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td
                        color='#012d51'
                        fontFamily='RobotoLight'
                        fontWeight='300'
                        borderRight='1px solid #B2F5EA'
                        borderBottom={
                          users.length === index + 1
                            ? "none"
                            : "1px solid #B2F5EA"
                        }
                      >
                        {index + 1}
                      </Td>
                      <Td
                        color='#808080'
                        fontFamily='HelveticaCondensed'
                        borderRight='1px solid #B2F5EA'
                        borderBottom={
                          users.length === index + 1
                            ? "none"
                            : "1px solid #B2F5EA"
                        }
                      >
                        {name}
                      </Td>
                      <Td
                        color='#808080'
                        fontFamily='HelveticaCondensed'
                        borderRight='1px solid #B2F5EA'
                        borderBottom={
                          users.length === index + 1
                            ? "none"
                            : "1px solid #B2F5EA"
                        }
                      >
                        {email}
                      </Td>
                      <Td
                        color='#808080'
                        fontFamily='HelveticaCondensed'
                        borderRight='1px solid #B2F5EA'
                        borderBottom={
                          users.length === index + 1
                            ? "none"
                            : "1px solid #B2F5EA"
                        }
                      >
                        {birth}
                      </Td>
                      <Td
                        color='#808080'
                        fontFamily='HelveticaCondensed'
                        borderBottom={
                          users.length === index + 1
                            ? "none"
                            : "1px solid #B2F5EA"
                        }
                      >
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
