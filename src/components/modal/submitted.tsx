import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
    ModalHeader,
    ModalBody,
    Button,
    Box,
    Text,
} from '@chakra-ui/react';
function Sumbitted(props: any): JSX.Element {
    return (
        <>
            <ModalHeader
                display="flex"
                justifyContent="center"
                textAlign="center"
                marginTop="20px"
            >
                <Box>
                    <Box
                        border="1px solid #434E61"
                        borderRadius="50%"
                        height="160px"
                        width="160px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginLeft="auto"
                        marginRight="auto"
                    >
                        <FontAwesomeIcon icon={faCheck} fade style={{ color: "#ff8c1e", fontSize: "100px" }} />
                    </Box>
                </Box>
            </ModalHeader>
            <ModalBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"

            >
                <Text
                    fontSize={["24px", "28px"]}
                    fontFamily="Montserrat"
                    color="#434E61"
                    fontWeight="bold"
                    textAlign="center"
                >
                    All inforamtion was submitted successfully
                </Text>

            </ModalBody>
            <Box
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"

            >
                <Button

                    onClick={props.onClose}
                    fontSize="14px"
                    width="244px"
                    height="41px"
                    marginTop="20px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"


                    colorScheme="custom"

                >
                    Close
                </Button>

            </Box>

        </>
    )
}

export default Sumbitted