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
} from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import { User } from "../models/User";

export default function RegisteredList() {
  const { users } = useUsers();

  return (
    <Box>
      <Heading mb='2rem' textAlign='center'>
        Lista de Cadastro
      </Heading>
      <TableContainer>
        <Skeleton isLoaded={users ? users.length > 0 : false}>
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
              {users?.map(
                ({ name, email, birth, number }: User, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{name}</Td>
                      <Td>{email}</Td>
                      <Td>{birth}</Td>
                      <Td>{number}</Td>
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
