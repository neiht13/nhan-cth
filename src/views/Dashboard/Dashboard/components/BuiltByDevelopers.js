// Chakra imports
import {
    Button,
    Flex,
    Icon,
    Spacer,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import {BsArrowRight} from "react-icons/bs";

const BuiltByDevelopers = ({title, name, description, image, masp,ngaythuhoach, hansudung, donggoi, sxquytrinh}) => {
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Card minHeight='290.5px' p='1.2rem' mb="10px">
            <CardBody w='100%'>
                <Flex flexDirection={{sm: "column", lg: "row"}} w='100%'>
                    <Flex
                        flexDirection='column'
                        h='100%'
                        lineHeight='1.6'
                        width={{lg: "45%"}}>
                        <Text fontSize='sm' color='gray.400' fontWeight='bold'>
                            {title}
                        </Text>
                        <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
                            {name}
                        </Text>
                        <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                            {description}
                        </Text>
                        <Spacer/>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Mã sản phẩm:{" "}
                        </Text>
                        <Text fontSize='md' color='gray.500' fontWeight='400'>
                            {masp}
                        </Text>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Ngày thu hoạch:{" "}
                        </Text>
                        <Text fontSize='md' color='gray.500' fontWeight='400'>
                            {ngaythuhoach}
                        </Text>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Quy cách đóng gói:{" "}
                        </Text>
                        <Text fontSize='md' color='gray.500' fontWeight='400'>
                            {donggoi}
                        </Text>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Hạn sử dụng:{" "}
                        </Text>
                        <Text fontSize='md' color='gray.500' fontWeight='400'>
                            {hansudung}
                        </Text>
                    </Flex>
                    <Spacer/>
                    <Flex align='center' mb='10px' ml='5px' flexDirection={{lg: "column"}}>
                        <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                            Sản xuất theo quy trình:{" "}
                        </Text>
                        <Text fontSize='md' color='gray.500' fontWeight='400'>
                            {sxquytrinh}
                        </Text>
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
        </Card>
    );
};

export default BuiltByDevelopers;
