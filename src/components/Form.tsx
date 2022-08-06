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
import { User } from "../models/User";
import useCustomToast from "../hooks/useToast";

const defaultFormState = {
  name: "",
  email: "",
  birth: "",
  number: "",
};

export default function Form() {
  const { postUser } = useAppCtx();
  const { errorToast, successToast } = useCustomToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formStates, setFormStates] = useState<User>(defaultFormState);
  const { name, email, birth, number } = formStates;

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  }

  function validateForm() {
    return Object.values(formStates).some((e) => e.length < 5);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validateForm()) return errorToast("por favor preencha os campos");

    setIsLoading(true);
    const err = await postUser(formStates).then((n) => n);
    setIsLoading(false);

    if (err !== 201) return errorToast("server error");

    successToast("Cadastrado com sucesso");
    setFormStates(defaultFormState);
  }

  return (
    <Flex flexDir='column' w='100%' maxW='668px' textAlign='center' m='0 auto'>
      <Heading
        color='white'
        fontSize='3xl'
        fontFamily='HelveticaUltraLt'
        fontWeight='thin'
      >
        Cadastro
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl py='0.5rem'>
          <FormLabel>Nome</FormLabel>
          <Input
            placeholder='seu nome'
            name='name'
            value={name}
            onChange={onChange}
          />
        </FormControl>
        <FormControl py='0.5rem'>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder='email@email.com'
            name='email'
            value={email}
            onChange={onChange}
          />
        </FormControl>
        <FormControl py='0.5rem'>
          <FormLabel>Nascimento</FormLabel>
          <Input
            placeholder='dd/mm/year'
            name='birth'
            value={birth}
            onChange={onChange}
          />
        </FormControl>
        <FormControl py='0.5rem'>
          <FormLabel>Telefone</FormLabel>
          <Input
            placeholder='(DD) 99999-9999'
            name='number'
            value={number}
            onChange={onChange}
          />
        </FormControl>
        <Button
          type='submit'
          mt='1rem'
          backgroundColor='#012d51'
          color='#29abe2'
          fontSize='3xl'
          borderRadius='none'
          w='100%'
          maxW='366px'
          fontFamily='HelveticaUltraLt'
          fontWeight='thin'
          isLoading={isLoading}
        >
          Cadastrar
        </Button>
      </form>
    </Flex>
  );
}
