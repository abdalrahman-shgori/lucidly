import React, { useState } from "react";
import {
    ModalHeader,
    ModalBody,
    Button,
    Box,
    SimpleGrid,
    GridItem,
    Text,
} from '@chakra-ui/react';
import innovation from "../../assets/images/innovation.svg"
import education from "../../assets/images/education.svg"
import medicine from "../../assets/images/medicine.svg"
import pharamtech from "../../assets/images/pharmtech.svg"
import technology from "../../assets/images/technology.svg"
import tele from "../../assets/images/tele.svg"
import relax from "../../assets/images/relax.svg"
import research from "../../assets/images/Research.svg"
import Tru from "../../assets/images/true.svg"
import { useRecoilState } from 'recoil';
import { myState } from "../../mystate";
import { useToast } from '@chakra-ui/react'

function Third(props: any): JSX.Element {

    const img = [
        { id: "0", img: innovation, text: "meicie" },
        { id: "1", img: education, text: "meicie" },
        { id: "2", img: medicine, text: "meicie" },
        { id: "3", img: pharamtech, text: "meicie" },
        { id: "4", img: technology, text: "meicie" },
        { id: "5", img: tele, text: "meicie" },
        { id: "6", img: relax, text: "meicie" },
        { id: "7", img: research, text: "meicie" },

    ]
    const toast = useToast()

    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [recoilState, setRecoilState] = useRecoilState(myState);


    const toggleImageSelection = (id: string) => {
        setRecoilState((prevRecoilState) => ({
            ...prevRecoilState,
            selectedImages: prevRecoilState.selectedImages.includes(id)
                ? prevRecoilState.selectedImages.filter((imageId) => imageId !== id)
                : [...prevRecoilState.selectedImages, id],
        }));
        if ((selectedImages as string[]).includes(id)) {
            setSelectedImages((prevSelectedImages) =>
                prevSelectedImages.filter((imageId) => imageId !== id)
            );
        } else {
            setSelectedImages((prevSelectedImages) => [...prevSelectedImages, id]);
        }
    };
    const Next = (): void => {
        if (isPickButtonDisabled) {
            alert("")
            toast({
                title: "Select 3 or more ",
                status: "error",
                position: "top-right"
            })
        }
        else {
            props.Next()
        }
    }
    const isPickButtonDisabled = selectedImages.length < 3;
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
                        display="flex"
                        justifyContent="center"
                        align="center"
                        textAlign="center"
                    >
                        Tell us what you’re <br /> interested in
                    </Text>
                </Box>
            </ModalHeader>
            <ModalBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    width={['100%', '80%']}
                >
                    <SimpleGrid columns={[2, 2, 4]} spacing={4}>
                        {img.map((item, index) => (
                            <GridItem
                                key={item.id}
                                onClick={() => toggleImageSelection(item.id)}
                                style={{
                                    border: (selectedImages as string[]).includes(item.id)
                                        ? "2px solid #FF8C1E"
                                        : "none",
                                    borderRadius: "8px",
                                }}
                                position="relative">
                                <img src={item.img} alt={`Image ${index}`} />
                                {(selectedImages as string[]).includes(item.id) && (
                                    <Box
                                        position="absolute"
                                        top="4%"
                                        right="4%"
                                    >
                                        <img src={Tru}></img>
                                    </Box>
                                )}
                                <Text
                                    position="absolute"
                                    bottom="4px"
                                    left="10px"
                                    color="#FFFFFF"
                                    fontSize="14px"
                                    fontFamily="montserrat"
                                    zIndex="1"
                                > {item.text}</Text>
                            </GridItem>
                        ))}
                    </SimpleGrid>
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
                    onClick={Next}
                    fontSize="14px"
                    width="244px"
                    height="41px"
                    marginTop="20px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor={isPickButtonDisabled ? "not-allowed" : "pointer"}
                    colorScheme={isPickButtonDisabled ? "disapled" : "custom"}
                    disabled={isPickButtonDisabled}

                >
                    {isPickButtonDisabled ? "Pick 3 more" : "Submit"}
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

export default Third