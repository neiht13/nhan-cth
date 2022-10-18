import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import {EditIcon} from "@chakra-ui/icons";

function TablesTableRow(props) {
  const { logo, title, detail, subdomain, objectId, status, date } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
        <Td w={"10px"}><Link to={"/auth/entry/"+ objectId}>
            <Button p="0px" bg="transparent" variant="no-hover">
                <i className="fa-solid fa-pencil"/>
            </Button></Link>
        </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {title}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {detail}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>

    </Tr>
  );
}

export default TablesTableRow;
