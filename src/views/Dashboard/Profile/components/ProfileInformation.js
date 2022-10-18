// Chakra imports
import {Flex, Icon, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";
// Custom components
import QRCode from "../../../../variables/QR/qr";


import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const ProfileInformation = ({
                                dientich,
                                nguoisx,
                                cososx,
                                diachi,
                                tieuchuan,
                                chungchi,
                                hieuluc,
                                hinhanhchungnhan,
                            }) => {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    console.log(location)
    return (
        <Flex direction='column'>
            {/*<Text fontSize='md' color='gray.500' fontWeight='400' mb='30px'>*/}
            {/*  {description}*/}
            {/*</Text>*/}
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Cơ sở sản xuất:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {cososx}
                </Text>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Người sản xuất:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {nguoisx}
                </Text>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Diện tích:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {dientich}
                </Text>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Địa chỉ:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {diachi}
                </Text>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Tiêu chuẩn:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {tieuchuan}
                </Text>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Chứng chỉ:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {chungchi}
                </Text>
            </Flex>
            <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    Hiệu lực:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {hieuluc}
                </Text>
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
