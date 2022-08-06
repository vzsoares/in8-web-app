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
  const [formStates, setFormStates] = useState<User>(defaultFormState);
  const { name, email, birth, number } = formStates;

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO validate formStates
    const err = await postUser(formStates).then((n) => n);

    if (err !== 201) return errorToast("server error");

    successToast("Cadastrado com sucesso");
    setFormStates(defaultFormState);
    // TODO error toast
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
