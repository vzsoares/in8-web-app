import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useAppCtx } from "../features/AppCtx";

export default function Form() {
  const { putUser } = useAppCtx();
  const [formStates, setFormStates] = useState({
    name: "",
    email: "",
    birth: "",
    number: "",
  });
  const { name, email, birth, number } = formStates;

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    putUser(formStates);
  }
  return (
    <Flex flexDir='column' w='100%' maxW='668px' textAlign='center' m='0 auto'>
      <Heading>Cadastro</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel py='0.5rem'>Nome</FormLabel>
          <Input
            placeholder='seu nome'
            name='name'
            value={name}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel py='0.5rem'>Email</FormLabel>
          <Input
            placeholder='email@email.com'
            name='email'
            value={email}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel py='0.5rem'>Nascimento</FormLabel>
          <Input
            placeholder='dd/mm/year'
            name='birth'
            value={birth}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel py='0.5rem'>Telefone</FormLabel>
          <Input
            placeholder='(DD) 99999-9999'
            name='number'
            value={number}
            onChange={onChange}
          />
        </FormControl>
        <Button type='submit' mt='1rem'>
          Cadastrar
        </Button>
      </form>
    </Flex>
  );
}
