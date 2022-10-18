import {
    Box, Fade,
    Flex,
    Icon,
    Image,
    Img, Kbd, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader,
    ModalOverlay, ScaleFade, Spacer,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {WalletIcon} from "../Icons/Icons";
import MiniStatistics from "../../views/Dashboard/Dashboard/components/MiniStatistics";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from "react-router-dom";


function TimelineRow(props) {
    const {logo, title, detail, date, color, index, arrLength, images, objectId} = props;
    const textColor = useColorModeValue("gray.700", "white.300");
    const bgIconColor = useColorModeValue("white.300", "gray.700");
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [imageSelect, setImageSelect] = useState()
    const history = useHistory();

    const decodeImage = (img) => {
        return `data:image/jpeg;base64,${btoa(img)}`
    }
    return (
        <Flex alignItems="center" minH="66px" justifyContent="start" margin="4px" color='mediumseagreen' >
            <Box width="20px" height="20px">
                <i className="fa fa-heart"></i>

            </Box>
            <Flex direction="column" justifyContent="center" h="100%" w="100%">
                <Flex  mb="3px" w="100%"
                >
                    <span style={{width:"20px"}}>
                      <Kbd>{date}</Kbd>
                    </span>
                    <Spacer />
                    {/*<i className="fa-solid fa-pencil" onClick={event =>  history.push("/auth/entry/" + objectId)}></i>*/}

                </Flex>
                <Flex padding="10px"  borderRadius="5px" width="100%"
                  boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 4px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px">
                <Flex direction="column" justifyContent="flex-start" h="100%">

                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                        {title}
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="normal">
                        {detail}
                    </Text>
                    <Flex direction='row' overflowY="hidden" scrollSnapType="y proximity">
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalCloseButton/>
                                <Image
                                    objectFit='cover'
                                    src={decodeImage(imageSelect)}
                                    alt='Dan Abramov'
                                    onClick={onOpen}
                                />
                            </ModalContent>
                        </Modal>
                        {images && images.length > 0 && images.map((image, index) => {
                            return (
                                <>
                                    <Image
                                        boxSize='100px'
                                        objectFit='cover'
                                        src={decodeImage(image)}
                                        mr={"5px"}
                                        alt={title+ index}
                                        onClick={(e)=>{onOpen(); setImageSelect(image)}}
                                        borderRadius="3px"
                                    />
                                </>
                            )
                        })}
                        {/*<Image*/}
                        {/*    boxSize='100px'*/}
                        {/*    objectFit='cover'*/}
                        {/*    src='https://cdn.galaxycine.vn/media/2020/4/17/300_1587120021100.jpg'*/}
                        {/*    alt='Dan Abramov'*/}
                        {/*    onClick={onOpen}*/}
                        {/*    borderRadius="3px"*/}
                        {/*/>&nbsp;*/}
                        {/*<Image*/}
                        {/*    boxSize='100px'*/}
                        {/*    objectFit='cover'*/}
                        {/*    src='https://cdn.galaxycine.vn/media/2020/4/17/300_1587120021100.jpg'*/}
                        {/*    alt='Dan Abramov'*/}
                        {/*    onClick={onOpen}*/}
                        {/*/>&nbsp;*/}
                        {/*<Image*/}
                        {/*    boxSize='100px'*/}
                        {/*    objectFit='cover'*/}
                        {/*    src='https://cdn.galaxycine.vn/media/2020/4/17/300_1587120021100.jpg'*/}
                        {/*    alt='Dan Abramov'*/}
                        {/*    onClick={onOpen}*/}
                        {/*/>&nbsp;*/}
                        {/*<Image*/}
                        {/*    boxSize='100px'*/}
                        {/*    objectFit='cover'*/}
                        {/*    src='https://cdn.galaxycine.vn/media/2020/4/17/300_1587120021100.jpg'*/}
                        {/*    alt='Dan Abramov'*/}
                        {/*    onClick={onOpen}*/}
                        {/*/>&nbsp;*/}
                        {/*<Image boxSize='100px'*/}
                        {/*       objectFit='cover'*/}
                        {/*       src='https://cdn.galaxycine.vn/media/2020/4/17/300_1587120021100.jpg'*/}
                        {/*       alt='Dan Abramov'/>*/}
                    </Flex>
                </Flex>
            </Flex>
            </Flex>

        </Flex>
    );
}

export default TimelineRow;
