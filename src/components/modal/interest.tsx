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
        { id: "0", img: innovation, text: "Innovation" },
        { id: "1", img: education, text: "Education" },
        { id: "2", img: medicine, text: "Midicine" },
        { id: "3", img: pharamtech, text: "Pharmatech" },
        { id: "4", img: technology, text: "Technology" },
        { id: "5", img: tele, text: "Telemedicene" },
        { id: "6", img: relax, text: "Lorem Ipusm" },
        { id: "7", img: research, text: "Research" },
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
                position="relative"
                top={["10px", "20px", "30px"]}
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
                        lineHeight="30px"
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
                marginBottom="20px"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    width={['100%', '100%']}
                    marginBottom="20px"
                >
                    <SimpleGrid columns={[3, 3, 4]} spacing={3}>
                        {img.map((item, index) => (
                            <GridItem
                                key={item.id}
                                onClick={() => toggleImageSelection(item.id)}
                                style={{
                                    border: (selectedImages as string[]).includes(item.id)
                                        ? "2px solid #FF8C1E"
                                        : "none",
                                    borderRadius: "8px",
                                    cursor: "pointer"
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
                                    left={["5px", "10px"]}
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
            </Box>
        </>
    )
}

export default Third