import React from "react";
import Signup from '../signup/Signup'
import {useHistory} from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import { Container, Left, Right, Icons, Title, Subtitle, TextContainer, Text } from "./signupLogin";
function SignupLogin() {
    const [open, setOpen] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(false);
    const history = useHistory();
    const handleClose = () => {
      setOpen(false)
    }
  return (
    <Container>
      <Left>
        <AiOutlineTwitter color= "white" size= "25rem"/>
      </Left>
      {!isLogin && <Right>
          <Icons>
            <AiOutlineTwitter color= "white" size= "4rem"/>
          </Icons>
          <Title>Happening Now</Title>
          <Subtitle>Join Twitter today.</Subtitle>
          <TextContainer>
              <Text>
                  Sign up with Google
              </Text>
          </TextContainer>
          <TextContainer>
              <Text>
                  Sign up with Apple
              </Text>
          </TextContainer>
          <TextContainer onClick = {() => setOpen(true)}>
              <Text>
                  Sign up with phone or email
              </Text>
          </TextContainer>
          <div onClick = {()=>setIsLogin(true)} style = {{cursor: "pointer",color: "white", margin: "10px 20px"}}>Already have an account? <span style = {{color: "rgb(27, 149, 224)"}}>Log in</span></div>
          {open && <Signup open={open} handleClose = {handleClose} />}
      </Right>}
      {isLogin && <Right>
          <Icons>
            <AiOutlineTwitter color= "white" size= "4rem"/>
          </Icons>
          <Title>Happening Now</Title>
          <Subtitle>Login in to Twitter</Subtitle>
          <TextContainer>
              <Text>
                  Log in with Google
              </Text>
          </TextContainer>
          <TextContainer>
              <Text>
                  Log in with Apple
              </Text>
          </TextContainer>
          <TextContainer onClick = {() => history.push('/login')}>
              <Text>
                  Use your phone number
              </Text>
          </TextContainer>
          <div onClick = {()=>setIsLogin(false)} style = {{color: "white", margin: "10px 20px", cursor: "pointer"}}>Create new account? <span style = {{color: "rgb(27, 149, 224)"}}>Sign up</span></div>
      </Right>}
    </Container>
  );
}

export default SignupLogin;
