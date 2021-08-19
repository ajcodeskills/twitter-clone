import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { Icons, Title, Input, Text } from "../signup/signup";
import { Container, SubCont,Button } from "./login";
function Login() {
  return (
    <Container>
      <SubCont>
        <Icons>
          <AiOutlineTwitter color="white" size="2rem" />
        </Icons>
        <Title primary>Log in to Twitter</Title>
        <Input placeholder="Phone, email, or username" />
        <Input placeholder="password" />
        <Button>Log in</Button>
      </SubCont>
    </Container>
  );
}

export default Login;
