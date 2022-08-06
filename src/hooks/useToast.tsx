import { useToast } from "@chakra-ui/react";

export default function useCustomToast() {
  const toast = useToast();

  const errorToast = (message: string) =>
    toast({
      description: message,
      status: "error",
      isClosable: true,
    });
  const successToast = (message: string) =>
    toast({
      description: message,
      status: "success",
      isClosable: true,
    });

  return { errorToast, successToast };
}
