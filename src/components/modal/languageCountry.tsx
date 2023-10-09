import React from "react";
import {
    ModalHeader,
    ModalBody,
    Button,
    Box,
    Text,
    Select,
} from '@chakra-ui/react';
import {
    FormControl,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil';
import { myState } from "../../mystate";
function Second(props: any): JSX.Element {
    const [recoilState, setRecoilState] = useRecoilState(myState);
    const handleLanguageChange = (newValue: string): void => {
        setRecoilState((prevRecoilState) => ({
            ...prevRecoilState,
            selectedLanguage: newValue,
        }));
    };
    const handleCountryChange = (newValue: string): void => {
        setRecoilState((prevRecoilState) => ({
            ...prevRecoilState,
            selectedCountry: newValue,
        }));
    };
    return (
        <>
            <ModalHeader
                marginTop="40px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="60px"
            >
                <Box>
                    <Text
                        fontSize={["20px", "28px"]}
                        fontFamily="Montserrat"
                        color="#434E61"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Pick your language and<br /> country/region
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                    width={['100%', '80%']}
                >
                    <FormControl width={['100%', '80%']}

                    >
                        <Select
                            cursor="pointer"
                            placeholder={recoilState.selectedLanguage === "" ? "Select Language" : recoilState.selectedLanguage}
                            background="#F6F6F6"
                            color="#B3B3B3"
                            onChange={(e) => handleLanguageChange(e.target.value)}
                        >
                            <option>English (EN)</option>
                            <option>Arabic (Ar)</option>
                            <option>French (FR)</option>
                        </Select>
                    </FormControl>
                    <FormControl width={['100%', '80%']}
                    >
                        <Select
                            cursor="pointer"
                            placeholder={recoilState.selectedCountry === "" ? "Select Country" : recoilState.selectedCountry}
                            background="#F6F6F6"
                            color="#B3B3B3"
                            onChange={(e) => handleCountryChange(e.target.value)}
                        >
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                    </FormControl>
                </Box>
            </ModalHeader>
            <ModalBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginBottom="40px"
            >
            </ModalBody>
            <Box
                position="relative"
            >
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    bottom="-60px"

                >
                    <Button

                        onClick={props.Next}
                        fontSize="14px"
                        width="244px"
                        height="41px"
                        marginTop="20px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"


                        colorScheme="custom"

                    >
                        Next
                    </Button>
                    <Button
                        onClick={props.Back}
                        background="transparent"
                        fontSize="10px"
                        fontFamily="Montserrat"
                        _hover={{ background: 'transparent', color: 'inherit' }}

                    >
                        Back
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Second