import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
            >
                <Box>
                    <Text
                        fontSize="28px"
                        fontFamily="Montserrat"
                        color="#434E61"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Pick your language and<br /> country/region
                    </Text>
                </Box>
            </ModalHeader>
            <ModalBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {/* Add your modal content here */}
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    width={['100%', '80%']}
                >
                    <FormControl width={['100%', '80%']}

                    >
                        <Select
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

            </ModalBody>
            <Box
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"

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

        </>
    )
}

export default Second