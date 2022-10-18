// Chakra imports
import {Button, Flex, Icon, Image, Input, Link, Text, useColorModeValue, useToast} from "@chakra-ui/react";
// Custom components
import QRCode from "../../../../variables/QR/qr";


import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, {useEffect, useState} from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const ProfileInformation = () => {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    const [info, setInfo] = useState("");
    const [id, setId] = useState("");
    const [nguoisx, setNguoisx] = useState("");
    const [cososx, setCososx] = useState("");
    const [dientich, setDientich] = useState("");
    const [diachi, setDiachi] = useState('');
    const [tieuchuan, setTieuchuan] = useState("");
    const [chungchi, setChungchi] = useState("");
    const [hieuluc, setHieuluc] = useState("");
    const [hinhanhchungnhan, setHinhanhchungnhan] = useState("");
    useEffect(()=>{
        getInfo();
    }, []);
    const toast = useToast()

    const handleSave = () => {
        alert(JSON.stringify({cososx,tomtat,name,ngaythuhoach,hansudung,sxquytrinh,donggoi}))
    }
    async function getInfo() {
        const response = await fetch(`https://karaserver.onrender.com/chungnhan/`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({owner: "htx01"})
        });
        const records = await response.json();
        setInfo(records[0]);
        setId(records[0]._id)
        setCososx(records[0].cososx)
        setDiachi(records[0].diachi)
        setNguoisx(records[0].nguoisx)
        setDientich(records[0].dientich)
        setChungchi(records[0].chungchi)
        setHieuluc(records[0].hieuluc)
        setHinhanhchungnhan(records[0].hinhanhchungnhan)
        setTieuchuan(records[0].tieuchuan)
    }
    const submit = async (e) => {
        e.preventDefault();
            await fetch("https://karaserver.onrender.com/chungnhan/update/"+id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({cososx,nguoisx,diachi,dientich,chungchi,hieuluc,hinhanhchungnhan,tieuchuan}),
            }).then((res) => {
                toast({
                    title: 'Thành công.',
                    description: "Cập nhật nhật ký " + name + " thành công.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            })
    }
    return (
        <Flex direction='column'>
            {/*<Text fontSize='md' color='gray.500' fontWeight='400' mb='30px'>*/}
            {/*  {description}*/}
            {/*</Text>*/}
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Cơ sở sản xuất:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={cososx}
                    onChange={(e) => {
                        setCososx(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Người sản xuất:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={nguoisx}
                    onChange={(e) => {
                        setNguoisx(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Diện tích:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={dientich}
                    onChange={(e) => {
                        setDientich(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Địa chỉ:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={diachi}
                    onChange={(e) => {
                        setDiachi(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Tiêu chuẩn:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={tieuchuan}
                    onChange={(e) => {
                        setTieuchuan(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Chứng chỉ:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={chungchi}
                    onChange={(e) => {
                        setChungchi(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Hiệu lực:{" "}
                </Text>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='text'
                    value={hieuluc}
                    onChange={(e) => {
                        setHieuluc(e.target.value)
                    }}
                />
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Ảnh:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    <Image
                        objectFit='cover'
                        src={hinhanhchungnhan}
                        mr={"5px"}
                        alt={cososx}
                        borderRadius="3px"
                    />
                </Text>
            </Flex>
            <Flex justifyContent={"center"} mb={"10px"}>
                <Button onClick={submit} bgColor="mediumseagreen">Lưu</Button>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Mã QR:{" "}
                </Text>
                <Card fontSize='md' color='gray.500' fontWeight='400'>
                    <QRCode
                        value={location.href}
                        size={220}
                        bgColor={"#ffffff"}
                        fgColor={"mediumseagreen"}
                        level={"H"}
                        qrStyle={"circle"}
                        includeMargin={true}
                        renderAs={"canvas"}
                    />
                </Card>
            </Flex>
        </Flex>
    );
};

export default ProfileInformation;
