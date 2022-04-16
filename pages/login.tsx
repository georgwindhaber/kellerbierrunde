import { Button, Center, Container, Input, Stack } from "@chakra-ui/react";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Center h={"100%"}>
      <Stack spacing={4}>
        <Input placeholder="Email" />
        <Input placeholder="Passwort" />
        <Button display="flex" className="primary">
          Login
        </Button>
      </Stack>
    </Center>
  );
}

export default Login;
