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
} from "@chakra-ui/react";
import React from "react";

export default function RegisteredList() {
  const mockData = [
    {
      name: "name",
      email: "email@email.com",
      birth: "12/12/1222",
      number: "31 99999999",
    },
    {
      name: "name",
      email: "email@email.com",
      birth: "12/12/1222",
      number: "31 99999999",
    },
    {
      name: "name",
      email: "email@email.com",
      birth: "12/12/1222",
      number: "31 99999999",
    },
    {
      name: "name",
      email: "email@email.com",
      birth: "12/12/1222",
      number: "31 99999999",
    },
    {
      name: "name",
      email: "email@email.com",
      birth: "12/12/1222",
      number: "31 99999999",
    },
  ];
  return (
    <Box>
      <Heading mb='2rem' textAlign='center'>
        Lista de Cadastro
      </Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th> </Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Nascimento</Th>
              <Th>Telefone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mockData.map(({ name, email, birth, number }, index) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{birth}</Td>
                  <Td>{number}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
