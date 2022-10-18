// Chakra imports
import {
    Button,
    Flex,
    Icon, Input,
    Spacer,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, {useEffect, useState} from "react";
// react icons

const BuiltByDevelopers = ({title, description, image}) => {
    const textColor = useColorModeValue("gray.700", "white");
    const [info, setInfo] = useState({})
    const [cososx, setCososx] = useState()
    const [tomtat, setTomtat] = useState()
    const [name, setName] = useState()
    const [ngaythuhoach, setNgaythuhoach] = useState()
    const [hansudung, setHansudung] = useState()
    const [sxquytrinh, setSxquytrinh] = useState()
    const [donggoi, setDonggoi] = useState()

    useEffect(()=>{
        getInfo();
    }, []);

    const handleSave = () => {
        alert(JSON.stringify({cososx,tomtat,name,ngaythuhoach,hansudung,sxquytrinh,donggoi}))
    }
    async function getInfo() {
        const response = await fetch(`http://localhost:5000/info/`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({owner: "htx01"})
        });
        if (!response.ok) {
            const message = `An error occured: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const records = await response.json();
        setInfo(records[0]);
        setCososx(records[0].cososx)
        setName(records[0].name)
        setHansudung(records[0].hansudung)
        setNgaythuhoach(records[0].ngaythuhoach)
        setTomtat(records[0].tomtat)
        setDonggoi(records[0].donggoi)
        setSxquytrinh(records[0].sxquytrinh)
    }
    return (
        <Card minHeight='290.5px' p='1.2rem' mb="10px">
            <CardBody w='100%'>
                <Flex flexDirection={{sm: "column", lg: "row"}} w='100%'>
                    <Flex
                        flexDirection='column'
                        h='100%'
                        lineHeight='1.6'
                        width={{lg: "45%"}}>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={cososx}
                            onChange={(e) => {
                                setCososx(e.target.value)
                            }}

                        />
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={tomtat}
                            size={"lg"}
                            onChange={(e) => {
                                setTomtat(e.target.value)
                            }}

                        />
                        <Spacer/>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Mã sản phẩm:{" "}
                        </Text>
                        <Text fontSize='md' color='gray.500' fontWeight='400'>
                            {info.masp}
                        </Text>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Ngày thu hoạch:{" "}
                        </Text>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={ngaythuhoach}
                            onChange={(e) => {
                                setNgaythuhoach(e.target.value)
                            }}
                        />
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Quy cách đóng gói:{" "}
                        </Text>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={donggoi}
                            onChange={(e) => {
                                setDonggoi(e.target.value)
                            }}
                        />
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Hạn sử dụng:{" "}
                        </Text>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={hansudung}
                            onChange={(e) => {
                                setHansudung(e.target.value)
                            }}
                        />
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Sản xuất theo quy trình:{" "}
                        </Text>
                        <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='text'
                            mb='10px'
                            value={sxquytrinh}
                            onChange={(e) => {
                                setSxquytrinh(e.target.value)
                            }}
                        />
                    </Flex>
                    <Spacer/>
                    <Flex
                        bg='mediumseagreen'
                        align='center'
                        justify='center'
                        borderRadius='15px'
                        width={{lg: "40%"}}
                        p={"2px"}
                        mt={"5px"}
                    >
                        {image}
                    </Flex>
                </Flex>
            </CardBody>
            <Button mt="5px" onClick={handleSave}>Lưu</Button>
        </Card>
    );
};

export default BuiltByDevelopers;
