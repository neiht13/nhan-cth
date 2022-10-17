// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon, Image,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue, useToast,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React, {useEffect, useState} from "react";
import {FaApple, FaFacebook, FaGoogle} from "react-icons/fa";
import * as dayjs from "dayjs";
import {useParams} from "react-router-dom";

function Entry() {
    const titleColor = useColorModeValue("mediumseagreen", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
    const now = dayjs().format('YYYY-MM-DD')
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [date, setDate] = useState(now);
    const [user, setUser] = useState("");
    const [images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    const toast = useToast()
    let { id } = useParams();
    console.log(id)

    useEffect(()=>{
        if(id) {
            async function fetchData() {
                const response = await fetch(`http://localhost:5000/records/${id}`);

                if (!response.ok) {
                    const message = `An error has occured: ${response.statusText}`;
                    window.alert(message);
                    return;
                }

                const record = await response.json();
                setName(record.title);
                setDetail(record.detail);
                setDate(record.date);
                setUser(record.user);
                setImages(record.images);
            }

            fetchData();

            return;
        }
    }, [id]);

    const submit = async (e) => {

        console.log((JSON.stringify({name, detail, date, user, images})));
        e.preventDefault();
        await fetch("http://localhost:5000/nhatky/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"title": name, detail, date, images}),
        }).then((res)=>{
            toast({
                      title: 'Thành công.',
                      description: "Cập nhật nhật ký "+name+" thành công.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                  })
        })
            .catch(error => {
                window.alert(error);
                return;
            });
    }

    const handleImages = (e) => {
        let files = Array.from(e.target.files);
        files.length > 0 && files.forEach((i) =>{
            getBase64(i, (result) => {
                setImages(images => [...images, result])
            });
        })

    }
    const decodeImage = (img) => {
        return `data:image/jpeg;base64,${btoa(img)}`
    }
    const getBase64=(file, cb)=> {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    return (
        <Flex
            direction='column'
            alignSelf='center'
            justifySelf='center'
            overflow='hidden'>
            <Box
                position='absolute'
                minH={{base: "70vh", md: "50vh"}}
                w={{md: "calc(100vw - 50px)"}}
                borderRadius={{md: "15px"}}
                left='0'
                right='0'
                bgRepeat='no-repeat'
                overflow='hidden'
                zIndex='-1'
                top='0'
                bgImage={BgSignUp}
                bgSize='cover'
                mx={{md: "auto"}}
                mt={{md: "14px"}}></Box>
            <Flex
                direction='column'
                textAlign='center'
                justifyContent='center'
                align='center'
                mt='6.5rem'
                mb='30px'>
            </Flex>
            <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
                <Flex
                    direction='column'
                    w='90%'
                    maxW="768px"
                    background='transparent'
                    borderRadius='15px'
                    p='40px'
                    bg={bgColor}
                    boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
                    <Text
                        fontSize='xl'
                        color={textColor}
                        fontWeight='bold'
                        textAlign='center'
                        mb='22px'>
                        Nhập dữ liệu Nhật ký
                    </Text>
                    <FormControl>
                        <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Tên công việc
                        </FormLabel>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            placeholder='Nhập tên công việc'
                            mb='24px'
                            size='lg'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Chi tiết công việc
                        </FormLabel>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            placeholder='Nhập chi tiết công việc'
                            mb='24px'
                            size='lg'
                            onChange={(e) => {
                                setDetail(e.target.value)
                            }}

                        />
                        <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Ngày thực hiện
                        </FormLabel>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='date'
                            placeholder='Your email address'
                            mb='24px'
                            size='lg'
                            defaultValue={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}

                        />
                        <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Hình ảnh
                        </FormLabel>
                        <Flex border="1px dashed mediumseagreen" borderRadius="5px" h="48px" role="input" mb="50px">
                            <Flex justifyContent="center">
                                <svg fontSize="50px" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                     focusable="false"
                                     className="chakra-icon css-1yyus16" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"></path>
                                </svg>
                            </Flex>
                            <Input
                                fontSize='sm'
                                ms='4px'
                                borderRadius='15px'
                                type='file'
                                size='lg'
                                multiple
                                sx={{
                                    '-webkit-file-upload-button': {
                                        'visibility': 'hidden'
                                    }
                                    }
                                }
                                opacity="0"
                                onChange={handleImages}
                            />
                        </Flex>
                        {images && <Flex mb={"24px"}>
                            {images.map(img => {
                                return (
                                    <Image
                                        boxSize='100px'
                                        objectFit='cover'
                                        mr={"5px"}
                                        src={decodeImage(img)}
                                    />
                                )
                            })}

                        </Flex>}
                        <Button
                            type='submit'
                            bg='mediumseagreen'
                            fontSize='10px'
                            color='white'
                            fontWeight='bold'
                            w='100%'
                            h='45'
                            mb='24px'
                            _hover={{
                                bg: "teal.200",
                            }}
                            _active={{
                                bg: "teal.400",
                            }}
                            onClick={submit}
                        >
                            Lưu thông tin
                        </Button>
                    </FormControl>

                </Flex>
            </Flex>
        </Flex>
    );
}

export default Entry;
