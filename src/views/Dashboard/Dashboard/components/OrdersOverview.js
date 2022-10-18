// Chakra imports
import {
    Flex,
    Grid,
    Hide,
    Show, Skeleton,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TimelineRow from "components/Tables/TimelineRow";
import React from "react";
import ProfileInformation from "../../Profile/components/ProfileInformation";
import {timelineData} from "../../../../variables/general";

const OrdersOverview = ({title, amount, data, isLoading, chungnhan}) => {
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Card maxH='100%'>
            <CardHeader p='22px 0px 35px 14px'>
                <Flex direction='column'>
                    <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
                        Nhật ký canh tác&nbsp;
                    </Text>
                    <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                        Tổng số&nbsp;
                        <Text fontWeight='bold' as='span' color='mediumseagreen'>
                            {data.length}
                        </Text>
                        &nbsp;công việc.
                    </Text>
                </Flex>
            </CardHeader>
            <CardBody pe='0px' mb='31px' style={{display: "block"}}>
                <Show breakpoint='(max-width: 768px)'>
                    <Tabs isFitted variant='enclosed' borderColor="mediumseagreen" color='mediumseagreen'>
                        <TabList justifyContent="center">
                            <Tab color='mediumseagreen' borderTopLeftRadius="10px" borderTopRightRadius="10px"
                                 _focus="none">Nhật ký</Tab>
                            <Tab color='mediumseagreen' borderTopLeftRadius="10px" borderTopRightRadius="10px"
                                 _focus="none">Thông tin</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel padding="5px 5px 5px" h="inherit">
                                <Flex direction='column' h={"inherit"}>
                                    <Skeleton/>

                                    {data.map((row, index, arr) => {
                                        return (
                                                <TimelineRow
                                                    key={row.title}
                                                    logo={row.logo}
                                                    title={row.title}
                                                    detail={row.detail}
                                                    date={row.date}
                                                    color={row.color}
                                                    index={index}
                                                    arrLength={arr.length}
                                                    images={row.images}
                                                    objectId={row._id}
                                                />
                                        );
                                    })}
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <ProfileInformation
                                dientich={chungnhan.dientich}
                                nguoisx={chungnhan.nguoisx}
                                cososx={chungnhan.cososx}
                                diachi={chungnhan.diachi}
                                tieuchuan={chungnhan.tieuchuan}
                                chungchi={chungnhan.chungchi}
                                hieuluc ={chungnhan.hieuluc}
                                hinhanhchungnhan={chungnhan.hinhanhchungnhan}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Show>
                <Hide breakpoint='(max-width: 768px)'>
                    <Grid
                        templateColumns={{sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr"}}
                        templateRows={{sm: "1fr auto", md: "1fr", lg: "1fr"}}
                        gap='24px'>
                        <Flex direction='column'>
                            <Skeleton isLoaded={!isLoading}/>

                            {data.map((row, index, arr) => {
                                return (
                                    <TimelineRow
                                        key={row.title}
                                        logo={row.logo}
                                        title={row.title}
                                        detail={row.detail}
                                        date={row.date}
                                        color={row.color}
                                        index={index}
                                        arrLength={arr.length}
                                        images={row.images}
                                        objectId={row._id}
                                    />
                                );
                            })}
                        </Flex>
                        <ProfileInformation
                            dientich={chungnhan.dientich}
                            nguoisx={chungnhan.nguoisx}
                            cososx={chungnhan.cososx}
                            diachi={chungnhan.diachi}
                            tieuchuan={chungnhan.tieuchuan}
                            chungchi={chungnhan.chungchi}
                            hieuluc ={chungnhan.hieuluc}
                            hinhanhchungnhan={chungnhan.hinhanhchungnhan}
                        />
                    </Grid>
                </Hide>
            </CardBody>
        </Card>
    );
};

export default OrdersOverview;
