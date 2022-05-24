import { Button, Center, Container, Input, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import axios from "axios";
import { useState } from "react";

const Login: NextPage = () => {
  async function login() {
    const user = await axios.post("/api/login", { email });
    console.log(user.data);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Center h={"100%"}>
      <Stack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input placeholder="Passwort" />
        <Button display="flex" className="primary" onClick={login}>
          Login
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;
