// chakra imports
import {FormLabel, Input, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export function InputZone(props) {
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const notificationColor = useColorModeValue("gray.700", "white");
  const spacing = " ";
  return (
    <>
        <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
            {props.name}
        </FormLabel>
        <Input
            borderRadius='15px'
            mb='24px'
            fontSize='sm'
            type={props.type || "text"}
            placeholder={props.placeholder}
            size='lg'
            borderColor="mediumseagreen"
        />
    </>
  );
}
