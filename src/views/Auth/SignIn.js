import React, {useEffect, useState} from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue, toast, useToast,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import {Link, useHistory} from "react-router-dom";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("mediumseagreen", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const history = useHistory()
  useEffect(() => {
    localStorage.removeItem("auth")
    localStorage.removeItem("userRole")
    localStorage.removeItem("htxId")
  }, []);


  async function submitLogin() {
    await fetch("https://karaserver.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((res)=>{
      res.json().then(r=>{
          if(r.length>0){
          localStorage.setItem("auth", r[0].username)
          localStorage.setItem("userRole", r[0].role)
          localStorage.setItem("htxId", r[0].htxId)
            toast({
              title: 'Thành công.',
              description: "Đăng nhập thành công.",
              status: 'success',
              duration: 1000,
              isClosable: true,
            })
            history.push("/");
          }
          else{
            toast({
            title: 'Thất bại.',
            description: "Đăng nhập thất bại.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
          }
      });
    })
  }

  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Đăng nhập
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Nhập tài khoản và mật khẩu để đăng nhập
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Tài khoản
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                size='lg'
                value={username}
                onChange={e=>setUsername(e.target.value)}
                borderColor="mediumseagreen"
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Mật khẩu
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder='********'
                size='lg'
              />
              <Button
                fontSize='10px'
                type='submit'
                bg='mediumseagreen'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                onClick={submitLogin}

              >
                Đăng nhập
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Chưa có tài khoản?
                <Link to={"/auth/signup"}>
                <Text color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Đăng ký
                </Text>
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
